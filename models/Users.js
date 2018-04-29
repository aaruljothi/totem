var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username: {type: String, lowercase: true, unique: true, index: true},
    email: String, 
    age: Number,
    gender: String,
    zipcode: String,
    country: {type: String, default: 'US'},
    interests: String
    // votes: [String]
    // votes: [{type: mongoose.Schema.Types.ObjectId, ref:'Vote'}]
});

UserSchema.methods.getAnalytics = function(){
    var analytics = [];
    analytics.push(this.age);
    analytics.push(this.gender);
    analytics.push(this.zipcode);
    analytics.push(this.country);
    analytics.push(this.interests);
    analytics = analytics.join(',')
    return analytics;
}

UserSchema.methods.updateInterests = function(interests, cb){
    if (this.interests == ""){
        this.interests = interests;
    }else{
        this.interests = this.interests + interests; 
    }
    this.save(cb);
}

UserSchema.static('findByName', function(name){
    return this.find({username: name});
});

// UserSchema.updateVotes = function(VoteId){
//     this.votes.append(VoteId);
// }

mongoose.model('User', UserSchema);
