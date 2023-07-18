var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    phone: String,
    dateofbirth:
    {
        type:Date,
        required:true
    }
});

var user = new mongoose.model('User', schema);  // Model is basically a collection

module.exports = user;