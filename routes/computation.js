var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var x = (Math.random() * 1.8) - 0.9;
  var y = Math.atanh(x);
  res.send(`Math.atanh() applied to ${x} is ${y}`);
});

module.exports = router;