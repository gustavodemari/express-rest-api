/* Environment variables */
var config = require('./configs/config.js');

/* Module loading */

var express = require('express');
var router = express.Router();

/* Controller loading */

var users = require('./controllers/users.js');

/* Module starting */

var app = express();

/* Routes */

router.route('/users')
  .get(users.list);

//Enable CORS
app.all('*', config.server.CORS_SETUP);

//All routes prefixed with /api
app.use('/api', router);

/* Server starting */

app.listen(config.server.PORT, function(){
  console.log('Server running at '+config.server.PORT);
});