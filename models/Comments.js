var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
    author: String, 
    body: String,
    vote: String,
    post: {type: mongoose.Schema.Types.ObjectId, ref: 'Post', index=true},
    timestamp: String, 
})

mongoose.model('Comment', CommentSchema);