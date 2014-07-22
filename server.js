/* Environment variables */
var config = require('./configs/config.js');

/* Module loading */

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

/* Controller loading */

var users = require('./controllers/users.js');

/* Module starting */

var app = express();

//Enabling req.body for x-www-form-url-encoded
app.use(bodyParser.urlencoded({ extended: true }));

//Enabling req.body for application/json
app.use(bodyParser.json());

//Enable CORS
app.use(cors())

/* Routes */

router.route('/users')
  .get(users.list)
  .post(users.create);

router.route('/users/:userId')
  .get(users.list)
  .put(users.edit)
  .delete(users.delete);

//All routes prefixed with /api
app.use('/api', router);

/* Database connection */

mongoose.connect('mongodb://'+config.db.mongodb.HOST+'/'+config.db.mongodb.DATABASE_NAME);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database open');
});


/* Server starting */

app.listen(config.server.PORT, function(){
  console.log('Back-end server running at '+config.server.PORT);
});