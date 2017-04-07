// include all of our middleware - internal/external modules
let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

 // adding the mongoose module
 let mongoose = require("mongoose");
 // connect to mongoDB and use the games database
 
 //let URI = "mongodb://localhost/videogames";
 // Mongoose URI
 let URI = "mongodb://jason:pearson12@ds060369.mlab.com:60369/games"
 
 mongoose.connect(URI, (err) => {
   if(err) {
     console.log("Error connecting to the database");
   }
   else {
     console.log("Connected to MongoDB");
   }
 });
 

let index = require('./routes/index'); //index (object) for routing to index.html

let app = express();

// view engine setup
app.set('content', path.join(__dirname, 'views/content/')); //join 'views' folder with the file-system path
app.set('view engine', 'ejs'); //specify view engine, currently using ejs, can use pug/jade/etc

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json()); //
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

// catch 404 and forward to error handler
app.use((req, res, next) =>{
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) =>{
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
