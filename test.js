var
  assert = require('assert'),
  o = require('./')

assert.equal(o('+', 1)(2), 3)
assert.equal(o('/', 1)(2), 2)
