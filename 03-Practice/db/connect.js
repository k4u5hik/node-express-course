const mongoose = require('mongoose');

// GitGuardian detected this file as sensitive.
// this file should be in .gitignore

const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
}

module.exports = connectDB;
