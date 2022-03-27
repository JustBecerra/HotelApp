const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const morgan = require('morgan');
const route = require('./routes/routeIndex.js');

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
dotenv.config();
// app.use(cookieParser(process.env.COOKIE_SECRET));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use('/', route);

module.exports = app;