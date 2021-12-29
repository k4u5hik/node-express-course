require ('dotenv').config();
require('express-async-errors')

const express = require('express');
const app = express();

//rest of the packages
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const connectDB = require('./db/connect');

const authRoutes = require('./routes/authRoutes');

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(morgan('tiny'));
app.use(express.json());
app.use(cookieParser());
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/v1', (req, res) => {
  console.log(req.cookies);
  res.send('eCommerce API');
});

app.use('/api/v1/auth', authRoutes);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async ()=> {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port,
        console.log(`Server is listening http://localhost:${port}`));
  } catch (error) {
    console.log(error);
  }
}

start()