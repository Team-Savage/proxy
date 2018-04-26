const express = require('express')
const router = express.Router();
const db = require('../database/postgresQuery.js');

router.use(function(req, res, next) {
console.log('got to router!');
next();
});

router.get('/:restaurant', function(req, res) {
    console.log(db.extraQuery(req.params.restaurant))
    res.send('Im on the page!');
})

module.exports = router;