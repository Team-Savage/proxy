const express = require('express')
const restaurantRouter = express.Router();
const path = require('path');
const serve = require('express-static');

restaurantRouter.use(serve(path.join(__dirname, '../dist')));

module.exports = restaurantRouter;