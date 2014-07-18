module.exports = {
  server : {
    HOST : process.env.NODEJS_HOST || 'localhost',
    PORT : process.env.NODEJS_PORT || 5000    
  },
  db : {
    mysql : {
    HOST : process.env.MYSQL_HOST || 'localhost',
    PORT : process.env.MONGODB_PORT || 3306,
    USERNAME : process.env.MYSQL_USERNAME || 'root',
    PASSWORD : process.env.MYSQL_PASSWORD || 'password'
    },
    mongodb : {
      HOST : process.env.MONGODB_HOST || 'localhost',
      PORT : process.env.MONGODB_PORT || 27017,
      USERNAME : process.env.MONGODB_USERNAME || 'admin',
      PASSWORD : process.env.MONGODB_PASSWORD || 'password'
    },
    postgres : {
      HOST : process.env.MONGODB_HOST || 'localhost',
      PORT : process.env.MONGODB_PORT || 5432,
      USERNAME : process.env.MONGODB_USERNAME || 'root',
      PASSWORD : process.env.MONGODB_PASSWORD || 'password'
    }
  }
}