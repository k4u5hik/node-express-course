const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt',{
    highWaterMark: 90000},
    {encoding: 'utf8'}
);

// default 64kb buffer size
// last buffer will be smaller as it is the end of the file/remainder.
// highWaterMark is a property of the stream. Controls how much data is read at a time.
// const stream = createReadStream('./content/big.txt', {highWaterMark: 90000}); - Will be 90kb, Filesize is 169 kb
// const stream = createReadStream('./content/big.txt', {encoding: 'utf8'});
// filestream.pipe(writestream); - We can read and write to the same stream in chunks.
// If you check on the console log, you will see that the chunks are being read in chunks of 90kb

stream.on('data',(result)=>{
    console.log(result);
})

stream.on('error',(err)=> console.log(err));