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

  var config = JSON.parse(fs.readFileSync('./config/'+env+'.json', 'utf8'));

  return config;
}
