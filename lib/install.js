'use strict';

const path = require('path');
const cp = require('child_process');

const isMac = String(cp.execSync('uname')).startsWith('Darwin');

const from = path.join(__dirname, '../vendor', 'purs-' + (isMac ? 'mac' : 'linux'));
const to = path.join(__dirname, '../bin/purs.js')

cp.execSync('cp ' + from + ' ' + to);
