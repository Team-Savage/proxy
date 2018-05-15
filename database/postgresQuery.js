const { Pool, Client } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'menudata',
    password: '',
    port: 5432,
  })

const appetizerQuery = function(restaurant, callback) {
  pool.query(`SELECT * FROM appetizers WHERE name = '${restaurant}'`, (err, res) => {
    if (err) {
      console.log(err.stack)
    } else {
      callback(res.rows)
    }
  });
}

const mainQuery = function(restaurant, callback) {
  pool.query(`SELECT * FROM main WHERE name = '${restaurant}'`, (err, res) => {
    if (err) {
      console.log(err.stack)
    } else {
      callback(res.rows)
    }
  });
}

const beverageQuery = function(restaurant, callback) {
  pool.query(`SELECT * FROM beverage WHERE name = '${restaurant}'`, (err, res) => {
    if (err) {
      console.log(err.stack)
    } else {
      callback(res.rows)
    }
  });
    }

const extraQuery = function(restaurant, callback) {
        pool.query(`SELECT * FROM extra WHERE name = '${restaurant}'`, (err, res) => {
            if (err) {
              console.log(err.stack)
            } else {
              callback(res.rows)
            }
          });
        }

module.exports.appetizerQuery = appetizerQuery;
module.exports.beverageQuery = beverageQuery;
module.exports.mainQuery = mainQuery;
module.exports.extraQuery = extraQuery;