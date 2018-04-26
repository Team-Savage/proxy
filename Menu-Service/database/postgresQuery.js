const { Pool, Client } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'menudata',
    password: '',
    port: 5432,
  })

const appetizerQuery = function(callback) {
  pool.query('SELECT * FROM appetizers', (err, res) => {
    if (err) {
      console.log(err.stack)
    } else {
      console.log(res.rows)
    }
  });
}

const mainQuery = function(callback) {
pool.query('SELECT * FROM main', (err, res) => {
    if (err) {
      console.log(err.stack)
    } else {
      console.log(res.rows)
    }
  });
}

const beverageQuery = function(callback) {
    pool.query('SELECT * FROM beverage', (err, res) => {
        if (err) {
          console.log(err.stack)
        } else {
          console.log(res.rows)
        }
      });
    }

const extraQuery = function(restaurant, callback) {
        pool.query(`SELECT * FROM extra WHERE name = ${restaurant}`, (err, res) => {
            if (err) {
              console.log(err.stack)
            } else {
              console.log(res.rows)
            }
          });
        }

module.exports.appetizerQuery = appetizerQuery;
module.exports.beverageQuery = beverageQuery;
module.exports.mainQuery = mainQuery;
module.exports.extraQuery = extraQuery;