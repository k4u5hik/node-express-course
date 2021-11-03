const {readFile,writeFile} = require('fs').promises
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async() =>{
    try {                                           // Try and catch block
        const first = await readFile('./content/first.txt','utf8');
        const second = await readFile('./content/second.txt','utf8'); // Added second file
        await writeFile('./content/result-mind-grenade.txt',`This is awesome!: ${first} ${second}`,{flag:'a'} ); // Generated result file and added the two files
        console.log(first,second); //Logs out the two files
    } catch (error) {
        console.log(error);
    }}

start()


// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data);
//             }
//         })
//     })
// }


// getText('./content/first.txt')// If I change the path to '../content/second.txt' it will return an error
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))


// Set up a promise chain
// Setup an async await function
// Call the async await function
// Log the result
// Log the error

