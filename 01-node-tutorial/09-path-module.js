const path = require('path')

console.log(path.sep)

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)

const normalize = path.normalize(filePath)
console.log(normalize)

// this is good
const parse = path.parse(filePath)
console.log(parse)

const posix = path.posix.normalize(filePath)
console.log(posix)

const resolve = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(resolve)