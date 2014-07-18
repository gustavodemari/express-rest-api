var config = require('./configs/config.js');

var express = require('express');

var app = express();

app.listen(config.server.PORT, function(){
  console.log('Server running at '+config.server.PORT);
});