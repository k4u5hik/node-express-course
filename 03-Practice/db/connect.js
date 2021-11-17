const mongoose = require('mongoose');

// GitGuardian detected this file as sensitive.
// this file should be in .gitignore

const connectionString = 'mongodb+srv://kaushik:123@nodeexpressprojects.lrdtx.mongodb.net/03-Practice?retryWrites=true&w=majority'

const connectDB = (url) => {
    return mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
}

module.exports = connectDB;
