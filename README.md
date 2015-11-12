Javascript operators as functions

```js
var o = require('smooth-operator')
// o(operator, y)(x) === x operator y
o('+', 1)(2)
// returns 3
[1, 2, 3].map(o('+', 1))
// returns [2, 3, 4]
//supported operators
[
  '++',
  '--',
  'typeof',
  '+',
  '-',
  '~',
  '!',
  '/',
  '*',
  '%',
  'in',
  'instanceof',
  '<',
  '>',
  '<=',
  '>=',
  '==',
  '!=',
  '===',
  '!==',
  '<<',
  '>>',
  '>>>',
  '&',
  '|',
  '^',
  '&&',
  '||',
  '=',
  '*=',
  '/=',
  '%=',
  '+=',
  '-=',
  '<<=',
  '>>=',
  '>>>=',
  '&=',
  '^=',
  '|=',
  ','
]
```

Operator       | Expression   | Example
---------------|--------------|--------
Increment      | `++x`        | `o('++')(1) === 2`
Decrement      | `--x`        | `o('--')(1) === 2`
Typeof         | `typeof x`   | `o('typeof')(1) === 'number'`
Unary plus     | `+x`         | `o('+')('1') === 1`
Unary negation | `-x`         | `o('-')('1') === -1`
Addition       | `x + y`      | `o('+', 2)(1) === 3`
