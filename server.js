/* Environment constiables */
const config = require('./configs/config.js');

/* Module loading */

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const errorHandler = require('api-error-handler');

/* Controller loading */

const users = require('./controllers/users.js');

/* Module starting */

const app = express();

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

//Adding error handler
app.use(errorHandler());

//All routes prefixed with /api
app.use('/api', router);

/* Database connection */

mongoose.connect('mongodb://'+config.db.mongodb.HOST+'/'+config.db.mongodb.DATABASE_NAME);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database open');
});


/* Server starting */

app.listen(config.server.PORT, function(){
  console.log('Back-end server running at '+config.server.PORT);
});