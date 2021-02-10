//commonJs
const {add,mul} = require('./js/math-utils')

console.log(add(20,30))
console.log(mul(10,20))

//ES6
import {name,age,height} from './js/info';

console.log(name)
console.log(age)
console.log(height)

//引入css依赖
require('./css/normal.css')

//依赖less文件
require('./css/special.less')