var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    email: {type: String, lowercase: true, unique: true, index=true},
    age: Number,
    gender: String,
    zipcode: String,
    country: {type: String, default: 'US'},
    interests: String,
    votes: [{type: mongoose.Schema.Types.ObjectId, ref:'Vote'}]
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

mongoose.model('User', UserSchema);
