const express = require('express');
const pool = require('./modules/pool');
const axios = require('axios');

const app = express();
const bodyParser = require('body-parser');

// route includes
const servicesRouter = require('./routes/services.router');
const adminRouter = require('./routes/admin.router');
const aboutRouter = require('./routes/about.router');

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

