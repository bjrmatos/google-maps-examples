'use strict';

var path = require('path'),
    express = require('express'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    app = express();

app.set('port', 7000);
// Middleware
// Aqui va el middleware favicon
app.use(express.static(path.join(__dirname, 'app')));
app.use(logger('dev'));
app.use(cookieParser());

app.listen(app.get('port'), function() {
  console.log('Express magic on port: ', app.get('port'));
});
