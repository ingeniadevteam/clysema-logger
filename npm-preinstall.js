'use strict';

const cp = require('child_process');

console.info("Installing libsystemd-dev ...");

const installed = cp.spawnSync('sudo', ['apt-get', 'install', '-qq', '--yes', 'libsystemd-dev']);

if (installed.status !== 0) {
  throw new Error("libsystemd-dev must be installed.");
}
