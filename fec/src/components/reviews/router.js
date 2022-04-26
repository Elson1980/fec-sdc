const { Pool } = require("pg");
const pool = new Pool({
  database: 'fktest'
});
module.exports = pool;