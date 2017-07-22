const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');

////////////////////////////////////////////////////////////

// Create a new Express application.
var app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5000');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.set('port', (process.env.PORT || 5000));
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/root'))
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.set('views', __dirname + '/root');


// Configure view engine to render EJS templates.
app.set('view engine', 'ejs');

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));






// Define routes.
app.get('/login',
  (req, res) => {
    res.render('login');
  }
);

app.get('/srish',
  routes.index
);

app.get('/',
  routes.index
);


/////////////////////////////
app.get('*', function (req, res) {
  res.redirect('/');
});


app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});
