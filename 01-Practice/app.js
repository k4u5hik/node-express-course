const {readFile} = require('fs');

readFile('./content/first.txt','utf8',(err,data)=>{
    if (err){
        return
    } else {
        console.log(data);
    }
    })

// Ran the first.txt file data on the terminal console log successfully.