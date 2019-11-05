const { Pool } = require('pg');
const pool = new Pool({
  connectionString: null,
});

module.exports = {
  query: (text, params) => {
    pool.query(text, params)
  }
};