const mongoose = require('mongoose');
const _ = require('lodash');

const Users = require('./users/user_model');

module.exports = function initDB() {
  console.log('setting up database ...');
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost:27017/js_quizzes', { useMongoClient: true }); 
  const db = mongoose.connection;

  db.on('error', () => {
    console.log('error on connection to mongodb')
  });
  db.on('open', () => {
    console.log('connect to mongodb successfully');
    Users.find({
      username: 'admin'
    }, function(err, users) {
      if (err) console.log(err);
      else {
        if (users.length <= 0) {
          const admin = new Users({username: 'admin', password: '123456'});
          admin.save()
            .then(() => { console.log('admin user created !')});
        }
      }
    })
  });


}