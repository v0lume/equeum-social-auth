var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var isMobile = !!req.cookies.mobile;
  res.clearCookie('mobile');

  res.render('index', { title: 'Express', isMobile: true });
});

module.exports = router;
