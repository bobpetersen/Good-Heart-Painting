const express = require('express');
const pool = require('./modules/pool');
const axios = require('axios');

const app = express();
const bodyParser = require('body-parser');


// route includes

// body parser middleware
app.use(bodyParser.json());

