const express = require('express');
const app = express();
const path = require('path');
const serve = require('express-static');

app.use(serve(path.join(__dirname, '../dist')));

app.listen(3106)
console.log('listening to port 3106');