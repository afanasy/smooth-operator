var app = module.exports = function (operator, y) {
  app.operator = {
    '++': function (x) {return ++x},
    '--': function (x) {return --x},
    'typeof': function (x) {return typeof x},
    '+': function (x) {return (y === undefined)? +x: x + y},
    '-': function (x) {return (y === undefined)? -x: x - y},
    '~': function (x) {return ~x},
    '!': function (x) {return !x},
    '/': function (x) {return x / y},
    '*': function (x) {return x * y},
    '%': function (x) {return x % y},
    'in': function (x) {return x in y},
    'instanceof': function (x) {return x instanceof y},
    '<': function (x) {return x < y},
    '>': function (x) {return x > y},
    '<=': function (x) {return x <= y},
    '>=': function (x) {return x >= y},
    '==': function (x) {return x == y},
    '!=': function (x) {return x != y},
    '===': function (x) {return x === y},
    '!==': function (x) {return x !== y},
    '<<': function (x) {return x << y},
    '>>': function (x) {return x >> y},
    '>>>': function (x) {return x >>> y},
    '&': function (x) {return x & y},
    '|': function (x) {return x | y},
    '^': function (x) {return x ^ y},
    '&&': function (x) {return x && y},
    '||': function (x) {return x || y},
    '=': function (x) {return x = y},
    '*=': function (x) {return x *= y},
    '/=': function (x) {return x /= y},
    '%=': function (x) {return x %= y},
    '+=': function (x) {return x += y},
    '-=': function (x) {return x-= y},
    '<<=': function (x) {return x <<= y},
    '>>=': function (x) {return x <<= y},
    '>>>=': function (x) {return x >>>= y},
    '&=': function (x) {return x &= y},
    '^=': function (x) {return x ^= y},
    '|=': function (x) {return x |= y},
    ',': function (x) {return x, y}
  }
  console.log(Object.keys(app.operator))
  if (app.operator[operator])
    return app.operator[operator]
  return function (x) {return x}
}
