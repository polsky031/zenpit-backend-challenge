
const express = require('express'); 
const sequelize = require('sequelize');
const bodyParser = require('body-parser');

const models = require('./models');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//routes
const routes = require('./routes/device');

app.use('/zenpit', routes);

module.exports =  app;