var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var x = req.query.x;
  var y = Math.atan2(x);
  res.send(`Math.atan2() applied to ${x} is ${y}`);
});

module.exports = router;