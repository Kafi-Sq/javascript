// Promises - Cleaner way to write the code in 11-fs-async.js

const { readFile } = require('fs')

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

getText('./content/first.txt')
    .then(result => console.log(result))
    .catch((err) => console.log(err))
