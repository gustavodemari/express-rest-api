let User = require('../models/users.js');

module.exports = {
  list: function(req, res){
    let id = req.params.userId;
    let query = id ? { _id : id } : {};

    if(id){
      User.findOne(query, function(err, user){
        if (err) {
          res.status(400).json({ error : err } );
        }
        else {
          res.status(200).json( user );
        }
      });
    }
    else {
      User.find(query, function(err, users){
        if (err) {
          res.status(400).json({ error : err } );
        }
        else {
          res.status(200).json( users );
        }
      });
    }
  },
  create: function(req, res){
    let user = req.body.user;
    let query = { email: user.email };

    User.findOne(query, function(err, data){
      if(err) {
        res.status(400, { error : err } );
      }
      else {
        if(data){
          res.status(400, {message: 'User already registered'});
        }
        else {
          new User(user).save(function(err){
            if (err){
              res.status(400).json( { error : err } );
            }
            else {
              res.status(200).json( { message: 'User created' } );
            }
          });
        }
      }
    });

  },
  edit: function(req, res){
    let id = req.params.userId;
    let user = req.body.user;
    let query = { _id: id };

    if(id.length > 5){
      if(user._id){
        delete user._id;
      }
      
      User.update(query, {$set: user}, function(err){
        if (err){
          res.status(400).json( { error : err } );
        }
        else {
          res.status(200).json( { message: 'User updated' } );
        }
      });
    }
    else {
      res.status(400).json( { error : 'Input error' } );
    }
  },
  delete: function(req, res){
    let id = req.params.userId;
    let user = req.body.user;
    let query = { _id: id };

    if(id.length > 5){
      User.remove(query, function(err){
        if (err){
          res.status(400).json( { error : err } );
        }
        else {
          res.status(200).json( { message: 'User deleted' } );
        }
      });
    }
    else {
      res.status(400).json( { error : 'Input error' } );
    }
  }
}