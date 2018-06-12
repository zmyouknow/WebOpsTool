const express = require('express'),
    router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render("./admin/list")
});

router.get('/add', function(req, res) {
    res.render("./admin/add")
});

router.get('/cate', function(req, res) {
    res.render("./admin/cate")
});

router.get('/edit', function(req, res) {
    res.render("./admin/edit")
});

router.get('/role', function(req, res) {
    res.render("./admin/role")
});

router.get('/role-add', function(req, res) {
    res.render("./admin/role-add")
});

router.get('/rule', function(req, res) {
    res.render("./admin/rule")
});

module.exports = router;
