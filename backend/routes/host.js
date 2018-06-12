const express = require('express'),
    router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render("./host/list", {host_num: 10})
});

router.get('/add', function(req, res) {
    res.render("./host/add", {host_num: 10})
});

router.get('/upacp', function(req, res) {
    res.render("./host/upacp")
});

router.get('/qr', function(req, res) {
    res.render("./host/qr")
});

router.get('/at', function(req, res) {
    res.render("./host/at")
});

module.exports = router;
