"use strict";

const fs = require('fs');
const winston = require('winston');
require('winston-journald').Journald;

module.exports = async (app) => {
  let configObject, configValidated;

  // load config
  const path = `${app.path}/config/logger.json`;
  if (fs.existsSync(path)) {
    configObject = await require('../load-config')(path);
  } else {
    configObject = {};
  }
  // validate
  try {
    configValidated = await require(`./validation`)(configObject);
  } catch (e) {
    throw e;
  }

  // setup the logger config into the app object
  app.config.logger = configValidated;

  // set command line transports
  let logLevel;
  if (app.modules.env.logger.level) {
    // setup command line level
    logLevel = app.modules.env.logger.level;
    app.config.logger.level = logLevel;
  } else {
    // setup config level
    logLevel = app.config.logger.level;
  }

  return new (winston.Logger) ({
    levels: {
      error: 0,
      warn: 1,
      info: 2,
      debug: 3
    },
    colors: {
      error: 'red',
      warn: 'yellow',
      info: 'white',
      debug: 'blue'
    },
    transports: app.modules.env.isDevelopment || logLevel === 'debug' ?
    [
      new (winston.transports.Console)({
        level: "debug",
        prettyPrint: true,
        colorize: true,
        timestamp: true
      })
    ] :
    [
      new (winston.transports.Journald)({
        level: "info"
      })
    ]

  });

};
