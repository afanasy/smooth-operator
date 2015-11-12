!function () {
  var o = function (operator, y) {
    o.operator = {
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
    if (o.operator[operator])
      return o.operator[operator]
    return function (x) {return x}
  }
  if ((typeof define === 'function') && define.amd)
    return define(this.o = o)
  if ((typeof module === 'object') && module.exports)
    return module.exports = o
  this.o = o
}()
