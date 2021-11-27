const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url
      //,
      //{

    //Mongoose 6 useNewUrlParser, useUnifiedTopology, useFindAndModify, and useCreateIndex are no longer supported options. Mongoose 6 always behaves as if useNewUrlParser, useUnifiedTopology, and useCreateIndex are true, and useFindAndModify is false. Please remove these options from your code.
//    useNewUrlParser: true,
//    useCreateIndex: true,
//    useFindAndModify: false,
//    useUnifiedTopology: true,
//  }
  )
}

module.exports = connectDB
