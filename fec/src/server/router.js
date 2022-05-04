// const { Pool } = require("pg");
// const pool = new Pool({
//   database: 'FEC_DATABASE'
// });
// module.exports = pool;

const { Pool } = require("pg");
require('dotenv').config()

const pool = new Pool({
  DATABASE_URL: process.env.DATABASE_URL,
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE  
});

const { Client } = require('pg')
const client = new Client({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
})

module.exports = {pool, client}