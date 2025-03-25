var express = require('express');
var router = express.Router();
var x = req.query.x;
var y = Math.atan2(x);

/* GET users listing. */
router.get('/', function(req, res, next) {
  acc = ratio * acc;
  res.send(`Math.atan2() applied to ${x} is ${y}`);
});

module.exports = router;