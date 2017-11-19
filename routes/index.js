var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cloud Demo' });
});
router.get('/demo', function(req, res, next) {
  res.render('demo', { title: 'Cloud Demo' });
});


module.exports = router;
