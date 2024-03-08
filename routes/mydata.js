var express = require('express');
var router = express.Router();

/* Assignment 9. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Sai Charan Reddy Suravarapu' });
});

module.exports = router;
