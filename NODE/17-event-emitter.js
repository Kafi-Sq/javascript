const EventEmitter = require('events')
const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`data recieved user ${name} id ${id}`);
})
customEmitter.on('response', () => {
    console.log(`Some other logic here`);
})

customEmitter.emit('response', 'hassen', 8)



const http = require('http')

// const server = http.createServer((req, res) => {
//     res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer()

// Emits request event
// Subscribe to it -> Listen for it -> Respond to it
server.on('request', (req, res) => {
    res.end('Welcome')
})

server.listen(5000)