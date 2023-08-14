// Modules - In Node, every file is automatically a module
const { john, peter } = require('./4-names.js')
const sayHi = require('./5-utils.js')
const data = require('./6-alternative.js')
// If there is an executed function in the module, the code will run
require('./7-mind-grenade.js')

console.log(data)

sayHi('Susan')
sayHi(john)
sayHi(peter)

