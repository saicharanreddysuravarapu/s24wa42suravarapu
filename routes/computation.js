var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const x = req.query.x ? parseFloat(req.query.x) : randomNumber; 

a = `Math.fround() of ${x} is ${Math.fround(x)}<br>`
a+= `Math.random() applied to ${x} is ${Math.random(x)}<br>`
a+= `Math.round() applied to ${x} is ${Math.round(x)}`
  res.send(`${a}`);
  
}); 
module.exports = router;
