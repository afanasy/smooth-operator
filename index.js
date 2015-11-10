var app = module.exports = function (operator, y) {
  if (operator == '+')
    return function (x) {return x + y}
  if (operator == '-')
    return function (x) {return x - y}
  if (operator == '*')
    return function (x) {return x * y}
  if (operator == '/')
    return function (x) {return x / y}
  if (operator == '%')
    return function (x) {return x % y}
  if (operator == '<<')
    return function (x) {return x << y}
  if (operator == '>>')
    return function (x) {return x >> y}
  if (operator == '>>>')
    return function (x) {return x >>> y}
  if (operator == '&')
    return function (x) {return x & y}
  if (operator == '^')
    return function (x) {return x ^ y}
  if (operator == '|')
    return function (x) {return x | y}
  return function (x) {return x}
}
