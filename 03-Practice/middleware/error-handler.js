const errorHandlerMiddleware = (err,req,res,next)=> {
    res
        .status(500)
        .json({msg: err});
        //.json({msg: `Something went wrong, try again custom message`}); //OR This for custom error message
}
module.exports = errorHandlerMiddleware;