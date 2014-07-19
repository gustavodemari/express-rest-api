var config = require('../configs/config.js');

var assert = require('assert');
var request = require('superagent');

var API_URI = 'http://'+config.server.HOST+':'+config.server.PORT;

describe('API tests', function(){
  describe('/users', function(){
    describe('GET', function(){
      it('should return 200', function(next){
        request
          .get(API_URI + '/api/users')
          .end(function(res){
            assert (res.status === 200);
            next();
          })
      })
    })
    // describe('POST', function(){
    //   it('should return 200', function(next){
    //     request
    //       .post(API_URI + '/api/users')
    //       .send({user : { name : 'Test User', email : 'testuser@test.com', password: 'TeStE!@#'}})
    //       .end(function(res){ 
    //         assert (res.status === 200);
    //         next();
    //       })
    //   })
    // })
  })
})