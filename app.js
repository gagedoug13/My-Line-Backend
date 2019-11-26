// const createError = require('http-errors');
const express = require('express');
const cors = require('cors')
const Knex = require('knex')
const { Model } = require('objection')
const knexConfig = require('./knexfile')
const knex = Knex(knexConfig.development)
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const users = require('./controller/users');
const app = express();

Model.knex(knex)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());
app.use('/users', users);
app.use('/users/:id', users)


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log('this port works...maybe')
})


module.exports = app;
