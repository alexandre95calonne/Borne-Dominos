const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      },
      role: {
        type: String,
        enum: ['admin', 'kitchen', 'client'],
        required: true
      }
})

const Users = mongoose.model('Users', schema, 'users');

module.exports = Users;