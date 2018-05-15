const express = require('express')
const router = express.Router();
const path = require('path');
const serve = require('express-static');
const db = require('../database/postgresQuery.js');

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