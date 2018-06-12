const express = require('express'),
    router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render("./users/list")
});

router.get('/add', function(req, res) {
    res.render("./users/add")
});

router.get('/edit', function(req, res) {
    res.render("./users/edit")
});

router.get('/password', function(req, res) {
    res.render("./users/password")
});

module.exports = router;
