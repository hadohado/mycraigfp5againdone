var assert = require ('assert');
craigsource = require('../lib/craigsource.js');

/*
 *
 */

assert.equal (
  craigsource.hithere(),
  'Hi from craigsource module',
  'Expected "Hi from craigsource module". Got "' + craigsource.hithere() + '"'
)
