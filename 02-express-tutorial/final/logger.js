const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear() + '-' + (new Date().getMonth()+1) + '-' + new Date().getDate() + ' ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
    console.log(method, url, time)
    next()
  }

  module.exports = logger;