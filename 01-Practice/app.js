const {readFile} = require('fs');
const path = require("path");

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data);
            }
        })
    })
}

// getText('./content/first.txt')// If I change the path to '../content/second.txt' it will return an error
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))

const start = async() =>{
    try {                                           // Try and catch block
        const first = await getText('./content/first.txt');
        const second = await getText('./content/second.txt'); // Added second file
        console.log(first,second); //Logs out the two files
    } catch (error) {
        console.log(error);
    }}


start()

// Set up a promise chain
// Setup an async await function
// Call the async await function
// Log the result
// Log the error

