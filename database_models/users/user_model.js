const mongoose = require('mongoose');
const schema = require('./user_schema');

module.exports =  mongoose.model('Users', schema);