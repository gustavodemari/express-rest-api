var User = require('./models/users.js');
var users = [{email: 'steve@apple.com', name: 'Steve Jobs'}];

module.exports = {
  list: function(req, res){
    res.json(200, {users: users});
  },
  create: function(req, res){
    res.json(200, {message: 'User created'});
  },
  edit: function(req, res){
    console.log(req.params.userId);
    res.json(200, {users: users});
  },
  delete: function(req, res){
    console.log(req.params.userId);
    res.json(200, {message: 'User deleted'});
  }
}