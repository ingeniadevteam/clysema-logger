'use strict';

const cp = require('child_process');

const installed = cp.spawnSync('dpkg-query', ['-W', 'libsystemd-dev']);

if (installed.status !== 0) {
  const install = cp.spawnSync('sudo', ['apt-get', 'install', '-q', '--yes', 'libsystemd-dev']);
  
  if (install.status !== 0) {
    throw new Error("libsystemd-dev must be installed.");
  }
}
