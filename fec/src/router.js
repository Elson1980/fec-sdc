const { Pool } = require("pg");
const pool = new Pool({
  database: 'FEC_DATABASE'
});
module.exports = pool;