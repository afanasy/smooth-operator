Javascript operators as functions

## Example
```js
var o = require('smooth-operator')
o('+', 1)(2)
// returns 3
_.map([1, 2, 3], o('+', 1))
// returns [2, 3, 4]
```
