const BigNumber = require('bignumber.js')

const x = new BigNumber(123.4567)
const y = new BigNumber('123456.7e-3')
const z = new BigNumber(x)
console.log(x.equals(y) && y.equals(z) && x.equals(z))      // true

const a = new BigNumber(1011, 2)          // "11"
const b = new BigNumber('zz.9', 36)       // "1295.25"
const c = a.plus(b)
console.log(c['c'])                       // "1306.25"

