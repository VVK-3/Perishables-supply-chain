const express = require('express');
const createError = require('http-errors');
const path = require('path');
// const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');

const distributor = require('./routes/distributor');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(compression());
app.use('/distributors', distributor);
// app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

module.exports = app;