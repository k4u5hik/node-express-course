require ('dotenv').config()
//async errors

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')


//middleware
app.use(express.json())

//routes

app.get('/', (req, res) => {
    res.send(`<h1>Store API</h1><a href="/api/products">Product Route</a>`)
})

app.use('/api/v1/products', productsRouter)

// products route
app.use(notFoundMiddleware)
app.use(errorMiddleware)

const start = async () =>{
    try {
        //connectDB
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening http://localhost:${port}`))
    } catch (error) {
        console.log(error)
    }
}
start()