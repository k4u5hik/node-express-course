//const { CustomAPIError } = require('../errors')
const { StatusCodes } = require('http-status-codes')
const errorHandlerMiddleware = (err, req, res, next) => {

let customError = {
  //set default status
  statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
  msg: err.message || 'Something went wrong, please try again later.',
}

/*  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }*/

if (err.name === 'ValidationError') {
  console.log(Object.values(err.errors)) // We get back an array of error objects seperated by commas
  customError.msg = Object.values(err.errors)
      .map((item)=>item.message)
      .join(',')
  customError.statusCode = 400
}

  if (err.code && err.code === 11000) {
    customError.msg = `Duplicate values, ${Object.keys(err.keyValue)} already exists`
    customError.statusCode = 400
  }
  if(err.name === 'CastError'){
    customError.msg = `No item found with ID ${err.value}`
    customError.statusCode = 400
  }

  //eturn res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err })
  return res.status(customError.statusCode).json({ msg: customError.msg })
}

module.exports = errorHandlerMiddleware
