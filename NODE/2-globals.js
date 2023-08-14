// Node doesn't have a window or document since it's not on the browser

// __dirname    - path to the current directory
// __filename   - path to the current file
// requre       - function to use modules
// module       - info about the current module (file)
// process      - info about env where the program is being executed


console.log(__dirname)
console.log(__filename)

setInterval(() => {
    console.log('Hello world');
}, 1000)