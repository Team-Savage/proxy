const express = require('express');
const app = express();
const path = require('path');
const serve = require('express-static');
const router = require('./router.js')
const restaurants = require('./restaurants.js');

app.use('/data', router);

app.use('/r/:restaurant', restaurants);

app.use(serve(path.join(__dirname, '../dist')));

app.listen(3106, function() {
    console.log('listening to port 3106');
});
