/* Environment variables */
var config = require('./configs/config.js');

/* Module loading */

var express = require('express');

/* Module starting */

var app = express();
var router = express.Router();

/* Routes */

router.route('/users')
  .get(function(req, res){
    res.json(200, {users: []});
  })

//Enable CORS
app.all('*', config.server.CORS_SETUP);

//All routes prefixed with /api
app.use('/api', router);

/* Server starting */

app.listen(config.server.PORT, function(){
  console.log('Server running at '+config.server.PORT);
});