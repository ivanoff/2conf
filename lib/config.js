/*!
 * argest-config
 */

'use strict';

var fs = require('fs');

/**
 * Expose `createApplication()`
 */

exports = module.exports = createApplication;

/**
 * Create an bus-api-errors application.
 *
 * @return {Function}
 * @api public
 */

function createApplication(env) {
  if(!env) {
    env = process.env.NODE_ENV || 'default';
  }

  try {
    var configFile = './config/'+env+'.json';
    fs.accessSync(configFile, fs.F_OK);
    return JSON.parse(fs.readFileSync(configFile, 'utf8'));
  } catch (e) {
    return {};
  }

}
