var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    desc: String,
    postedAt:
    {
        type:Date,
        required:true
    },
    NoofLikes:
    {
        type:Number,
        required:true
    },
    comments:String
});

var post = new mongoose.model('Post', schema);

module.exports = post;