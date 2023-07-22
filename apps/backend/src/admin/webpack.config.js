'use strict';

const { dirname } = require('node:path');

/* eslint-disable no-unused-vars */
module.exports = (config, webpack) => {
  config.resolve.alias.codemirror5 = dirname(require.resolve('codemirror/package.json'));
  return config;
};
