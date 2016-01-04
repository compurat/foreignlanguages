// server.js
// load the things we need
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'))
// set the view engine to jade
app.set('view engine', 'jade');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
  res.render('index', { greeting: 'Express' });
  res.end;
});

app.listen(8080);
console.log('Server started on port: 8080');

// catch 404 and forward to error handler
app.use(function(req, res,next) {
  var error = new Error('Page Not Found');
  error.status = 404;
  next(error)
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
