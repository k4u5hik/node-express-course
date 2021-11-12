const logger = (req,res,next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear();
    console.log(`${method} ${url} ${time}`); // Example Terminal Response: GET / 2021
    //res.send('Testing')
    next()
}

module.exports = logger