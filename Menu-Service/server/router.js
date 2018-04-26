const express = require('express')
const router = express.Router();
const db = require('../database/postgresQuery.js');

router.use(function(req, res, next) {
console.log('got to router!');
next();
});

router.get('/:restaurant/extra', function(req, res) {
    db.extraQuery(req.params.restaurant, (data) => {
        res.send(data);
    }
    );
});

router.get('/:restaurant/main', function(req, res) {
    db.mainQuery(req.params.restaurant, (data) => {
        res.send(data);
    }
    );
});

router.get('/:restaurant/beverage', function(req, res) {
    db.beverageQuery(req.params.restaurant, (data) => {
        res.send(data);
    }
    );
});

router.get('/:restaurant/appetizer', function(req, res) {
    db.appetizerQuery(req.params.restaurant, (data) => {
        res.send(data);
    }
    );
});

module.exports = router;