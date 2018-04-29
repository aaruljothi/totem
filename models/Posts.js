var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    author: {type: String, index: true},
    title: String, 
    doc: {type: String, default: ''},
    docType: {type: String, default: ''},
    voteOptions: [String], 
    tags: {type: [String], index: true}, 
    timestamp: String, 
    analytics: {type: String, default: ''}
});

PostSchema.static('findByAuthor', function(fauthor){
    return this.find({author:fauthor});
});

PostSchema.static('findByTags', function(tag){
    return this.find({tags:tag});
});

PostSchema.methods.getAnalytics = function(){
    return this.analytics
} 

PostSchema.methods.updateAnalytics = function(user_analytics, cb){
    var prev_analytics = this.analytics;
    prev_analytics = prev_analytics.split('|')
    var usr_analytics = user_analytics.split(',')

    if (prev_analytics == ''){
        prev_analytics.push(usr_analytics[0]);
        prev_analytics.push(usr_analytics[1]);
        prev_analytics.push(usr_analytics[2]);
        prev_analytics.push(usr_analytics[3]);
        prev_analytics.push(usr_analytics[4]);
        this.analytics = prev_analytics.join('|');
    }else {
        prev_analytics[0] = prev_analytics[0].split(',')
        prev_analytics[0].push(user_analytics[0]);
        prev_analytics[0] = prev_analytics[0].join(',')
        prev_analytics[1] = prev_analytics[1].split(',')
        prev_analytics[1].push(usr_analytics[1])
        prev_analytics[1] = prev_analytics[1].join(',');
        prev_analytics[2] = prev_analytics[2].split(',')
        prev_analytics[2].push(usr_analytics[2])
        prev_analytics[2] = prev_analytics[2].join(',');
        prev_analytics[3] = prev_analytics[3].split(',')
        prev_analytics[3].push(usr_analytics[3])
        prev_analytics[3] = prev_analytics[3].join(',');
        prev_analytics[4] = prev_analytics[4].split(',')
        prev_analytics[4].push(usr_analytics[4])
        prev_analytics[4] = prev_analytics[4].join(',');
        console.log(prev_analytics.join(','));
        this.analytics = prev_analytics.join('|')
    }
    this.save(cb)
}

mongoose.model('Post', PostSchema);
