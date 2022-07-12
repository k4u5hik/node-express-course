const authorize = (req, res, next) => {
    const {user} = req.query
    if (user === 'admin') {
        req.user = {name: 'Kaushik', id: 3}
        console.log(req.user.name,req.user.id)
        next()
    } else {
        res.status(401).send('Unauthorized')
    }
    }
    module.exports = authorize