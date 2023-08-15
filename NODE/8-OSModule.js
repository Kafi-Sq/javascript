const os = require('os')

// Info about current user
const user = os.userInfo()
console.log(user)

// Method returns system uptime in seconds
console.log(`System uptime: ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs)