'use strict';

const cp = require('child_process');

const installed = cp.spawnSync('sudo', ['apt-get', 'install', '-qq', '--yes', 'libsystemd-dev']);

if (installed.status !== 0) {
  throw new Error("libsystemd-dev must be installed.");
}
