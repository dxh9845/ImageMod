var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');

/*  MULTER SETTINGS */
var multer = require('multer');
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, '/tmp/');
  },

  filename: function (req, file, cb) {
    var fileName = file.originalname.split('.')[0];
    console.log(req);
    cb(null, fileName + '-' + Date.now() +'.jpg')
  }
});
var upload = multer({ storage: storage });

var routes = require('./routes/index');
var users = require('./routes/users');
var edit = require('./routes/edit');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/tmp", express.static(path.join(__dirname, 'tmp')));

app.use('/', routes);
app.use('/users', users);
app.use('/edit', edit); 


/** USED TO UPLOAD AN IMAGE **/
app.post('/', upload.single('displayImage'), function(req, res) {
  var file = __dirname + '/tmp/' + req.file.filename;
  fs.rename(req.file.path, file, function(err) {
    if (err) {
      console.log(err);
      res.send(500);
    } else {
      console.log(req.file)
      var json = {
        message: 'File uploaded successfully',
        filename: req.file.filename
      };
      console.log(json);
      res.render('edit', { root: req.file.filename } );
    }
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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