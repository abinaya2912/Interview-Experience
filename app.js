const express = require('express');
const app = express();
const morgan = require('morgan');
const experiencesRouter = require('./routes/experiences');
app.use(morgan('dev'));
app.use(express.json());

app.use('/experiences', experiencesRouter);

module.exports = app;
