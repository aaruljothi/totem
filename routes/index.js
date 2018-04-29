var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');
var Post = mongoose.model('Post');
var User = mongoose.model('User');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/login', function (req, res, next) {
    res.render('login');
});

router.get('/preferences', function (req, res, next) {
    res.render('preferences');
});

router.get('/newPoll', function (req, res, next) {
    res.render('newPoll');
});




router.param('username', function (req, res, next, name) {
    var query = User.findByIdAndRemove(name)

    query.exec(function (err, user) {
        if (err) { return next(err); }
        if (!user) { return next(new Error('can\'t find user')); }
        req.user = user;
        return next();
    })
})

router.get('/user/:username', function (req, res, next) {
    res.json(req.user);
})

router.get('/user/:username/posts', function (req, res, next) {
    var query = Post.findbyAuthor(req.user.username);
    query.exec(function(err, posts){
        if(err){return next(err);}
        req.user.posts = posts;
        res.json(req.user);
    })
    // req.user.populate('posts', function (err, user) {
    //     if (err) { return next(err); }
    //     res.json(user);
    // })
})

router.get('/user/:username/votes', function (req, res, next) {
    var query = Comment.findbyAuthor(req.user.username);
    query.exec(function(err, votes){
        if(err){return next(err);}
        req.user.comments = comments;
        res.json(req.user);
    })
    // req.user.populate('posts', function (err, user) {
    //     if (err) { return next(err); }
    //     res.json(user);
    // })
})

// router.get('/user/:u')

router.get('/posts', function (req, res, next) {
    Post.find(function (err, posts) {
        if (err) { return next(err); }

        res.json(posts);
    });
});

router.post('/posts', function (req, res, next) {
    var post = new Post(req.body);
    post.author = req.payload.username;
    post.save(function (err, post) {
        if (err) { return next(err); }

        res.json(post);
    });
});

router.param('post', function (req, res, next, id) {
    var query = Post.findById(id);

    query.exec(function (err, post) {
        if (err) { return next(err); }
        if (!post) { return next(new Error('can\'t find post')); }

        req.post = post;
        return next();
    });
});

router.get('/posts/:post', function (req, res, next) {
    var query = Comment.findByPost(req.post);
    query.exec(function (err, comments){
        if(err){return next(err)}
        req.post.comments = comments;
        res.json(req.post)
    })
    // req.post.populate('comments', function (err, post) {
    //     if (err) { return next(err); }

    //     res.json(post);
    // });
});

router.post('/posts/:post/comments', function (req, res, next) {
    var comment = new Comment(req.body);
    comment.post = req.post;
    comment.author = req.payload.username;
    comment.save(function (err, comment) {
        if (err) { return next(err); }

        req.post.comments.push(comment);
        req.post.save(function (err, post) {
            if (err) { return next(err); }

            res.json(comment);
        });
    });
});

router.param('comment', function (req, res, next, id) {
    var query = Comment.findById(id);

    query.exec(function (err, comment) {
        if (err) { return next(err); }
        if (!comment) { return next(new Error('can\'t find comment')); }

        req.comment = comment;
        return next();
    });
});

router.get('/posts/:post/comments/:comment', function (req, res, next) {
    if (err) { return err; }
    return res.json(req.comment);
});

router.post('/register', function (req, res, next) {

    var user = new User();

    user.username = req.body.username;
    user.age = req.body.age;
    user.gender = req.body.gender;
    user.zipcode = req.body.zipcode;
    user.interests = '';
    user.votes = []

    user.save(function (err) {
        if (err) { return next(err); }

        return res.json(user)
    });
});

module.exports = router;
