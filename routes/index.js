var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
    res.render('login');
});

router.get('/newUser', function(req, res, next) {
    res.render('newUser');
});

router.get('/newPoll', function(req, res, next) {
    res.render('newPoll');
});

router.get('/history', function(req, res, next) {
    res.render('history');
});

module.exports = router;
