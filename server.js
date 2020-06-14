//my Node project Start point

var http = require("http");
var path = require("path");
var learnflutter=require('./routes/learnflutter');
var service=require('./routes/service');
var about=require('./routes/about');
var welcome=require('./routes/welcome');

var index=require('./routes/index');
var loogin=require('./routes/loogin');
var inde=require('./routes/inde');
var firstapp=require('./routes/firstapp');
var webview=require('./routes/webview');
var ali=require('./routes/ali');
var pushnotify=require('./routes/pushnotify');
var androidlearn=require('./routes/androidlearn');
var QueAns=require('./routes/QueAns');
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const passport = require("passport");
const flash = require("connect-flash");
const session = require("cookie-session");

const app = express();
// Passport Config
require("./config/passport")(passport);

// DB Config
const db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// EJS
app.use(expressLayouts);
app.set("view engine", "ejs");
app.use('/learnflutter',learnflutter);
app.use('/inde',inde);
app.use('/welcome',welcome);
app.use('/index',index);
app.use('/about',about);
app.use('/service',service);
app.use('/pushnotify',pushnotify);
app.use('/loogin',loogin);
app.use('/firstapp',firstapp);
app.use('/webview',webview);
app.use('/androidlearn',androidlearn);
app.use('/QueAns',QueAns);
app.use('/ali',ali);
// Express body parser
app.use(express.urlencoded({ extended: true }));

// Express session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

//Route import for serving static files like css,imges etc
app.use(express.static("Public"));
// Routes
app.use("/", require("./routes/index.js"));
app.use("/users", require("./routes/users.js"));

var port = process.env.PORT || 3003;
var server = http.createServer(app);
server.listen(port, () => {
  console.log("Server is starting = " + port);
});