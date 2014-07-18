var User = require('../models/users.js');

module.exports = {
  list: function(req, res){
    var id = req.params.userId;
    var query = id ? { _id : id } : {};

    if(id){
      User.findOne(query, function(err, user){
        if (err) {
          res.json(400, { error : err } );
        }
        else {
          res.json(200, { user: user } );
        }
      });
    }
    else {
      User.find(query, function(err, users){
        if (err) {
          res.json(400, { error : err } );
        }
        else {
          res.json(200, { users: users } );
        }
      });
    }
  },
  create: function(req, res){
    var user = req.body.user;
    var query = { email: user.email };

    User.findOne(query, function(err, data){
      if(err) {
        res.json(400, { error : err } );
      }
      else {
        if(data){
          res.json(400, {message: 'User already registered'});
        }
        else {
          new User(user).save(function(err){
            if (err){
              res.json(400, { error : err } );
            }
            else {
              res.json(200, { message: 'User created' } );
            }
          });
        }
      }
    });

  },
  edit: function(req, res){
    var id = req.params.userId;
    var user = req.body.user;
    var query = { _id: id };

    if(id.length > 5){
      User.update(query, {$set: user}, function(err){
        if (err){
          res.json(400, { error : err } );
        }
        else {
          res.json(200, { message: 'User updated' } );
        }
      });
    }
  },
  delete: function(req, res){
    var id = req.params.userId;
    var user = req.body.user;
    var query = { _id: id };

    if(id.length > 5){
      User.remove(query, function(err){
        if (err){
          res.json(400, { error : err } );
        }
        else {
          res.json(200, { message: 'User deleted' } );
        }
      });
    }
  }
}