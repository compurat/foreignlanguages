var express = require('express');
var router = express.Router();

/* GET error page. */
router.get('/', function(req, res, next) {
  res.render('index', { error: 'error' });
});

module.exports = router;
