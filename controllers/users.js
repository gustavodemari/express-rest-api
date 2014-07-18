var users = [{email: 'steve@apple.com', name: 'Steve Jobs'}];

module.exports = {
  list: function(req, res){
    res.json(200, {users: users});
  },
  create: function(req, res){
    res.json(200, {message: 'User created'});
  },
  delete: function(req, res){
    res.json(200, {message: 'Users deleted'});
  }
}