const mongoose = require('mongoose');

// GitGuardian detected this file as sensitive.
// this file should be in .gitignore

const connectionString = 'mongodb+srv://kaushik:123@nodeexpressprojects.lrdtx.mongodb.net/03-Practice?retryWrites=true&w=majority'

mongoose
    .connect(connectionString,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => {console.log('Connected to database');})
    .catch((err) => {console.log(err);});