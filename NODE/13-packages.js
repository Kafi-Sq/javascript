// npm - global command, comes with node
// npm --version

// local dependancy
// npm i <packageName>

// global dependancy - use it in any project
// npm i -g <packageName>

// package.json - manifest file (stores important info about project/package)
    // npm init (step by step, press enter to skip)
    // npm init -y (everything defualt)

    const _ = require('lodash')

    const items = [1, [2, [3, [4]]]]
    const newItems = _.flattenDeep(items)
    console.log(newItems);