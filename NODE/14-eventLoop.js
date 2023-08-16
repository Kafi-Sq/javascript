const { readFile } = require('fs')
const http = require('http')

// First Example
console.log('First task')
readFile('./content/first.txt', 'utf-8', (err, res) => {
    if (err) return
    console.log(res);
    console.log('Completed task');
})
console.log('Next task');


// Second example
console.log('first');
setTimeout(() => {
    console.log(('Second'));
}, 0)
console.log('Third');

// Third example
setInterval(() => {
    console.log('Hello world');
}, 2000)
console.log('This will run first');

// Fourth example
const server = http.createServer((req, res) => {
    console.log('request event');
    res.end('Hello world')
})
server.listen(5000, () => {
    console.log(`Port: 5000`);
})