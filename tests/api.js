var config = require('../configs/config.js');

var assert = require('assert');
var request = require('superagent');

var API_URI = 'http://'+config.server.HOST+':'+config.server.PORT+'/api';

describe('API tests', function(){
  describe('/users', function(){
    describe('GET', function(){
      it('should return 200', function(next){
        request
          .get(API_URI + '/users')
          .end(function(res){
            assert (res.status === 200);
            next();
          })
      })
    })
  })
})