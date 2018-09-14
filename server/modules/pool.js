const pg = require('pg');
const url = require('url');

let config = {};

const pool = new pg.Pool(config);


module.exports = pool;