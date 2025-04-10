// 导入语句只会让被导入模块执行一次，再次导入时会使用原先加载的模块
const { foo: sayHi, car } = require('./module.cjs')
// console.log(foo());
console.log(car)

// 模块导入时，进行重命名
const foo = "variable name conflict with module's export!"
console.log(sayHi())
console.log(foo)
