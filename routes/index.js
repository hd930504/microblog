var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/hello', function(req, res, next) {
    res.send('The time is ' + new Date().toString());
});

router.get('/user/:username', function(req, res, next) {

});

router.post('/post',function(req, res, next) {
    
})

router.get('/reg',function(req, res, next) {
    res.send('user: ');
    
})

router.post('/doReg',function(req, res, next) {
    
})

router.get('/login',function(req, res, next) {
    
})

router.post('/doLogin',function(req, res, next) {
    
})

router.get('/logout',function(req, res, next) {
    
})

module.exports = router;