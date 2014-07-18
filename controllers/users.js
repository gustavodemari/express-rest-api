var User = require('../models/users.js');

module.exports = {
  list: function(req, res){
    User.find({}, function(err, users){
      if (err) {
        res.json(400, { error : err } );
      }
      else {
        res.json(200, {users: users } );
      }
    });
  },
  create: function(req, res){
    var user = {email: 'steve@apple.com', name: 'Steve Jobs', password: 'steve'};
    new User(user).save(function(err){
      if (err){
        res.json(400, { error : err } );
      }
      else {
        res.json(200, {message: 'User created'});
      }
    });
  },
  edit: function(req, res){
    var id = req.params.userId;
    var user = {email: 'steve@apple.com', name: 'Steve Jobs', password: 'steve_'};
    if(id.length > 5){
      User.update({_id: id}, {$set: user}, function(err){
        if (err){
          res.json(400, { error : err } );
        }
        else {
          res.json(200, {message: 'User updated'});
        }
      });
    }
  },
  delete: function(req, res){
    var id = req.params.userId;
    var user = {email: 'steve@apple.com', name: 'Steve Jobs', password: 'steve_'};
    if(id.length > 5){
      User.remove({_id: id}, function(err){
        if (err){
          res.json(400, { error : err } );
        }
        else {
          res.json(200, {message: 'User deleted'});
        }
      });
    }
  }
}