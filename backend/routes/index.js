const express = require('express'),
    router = express.Router(),
    ssh2 = require('../service/ssh2Service'),
    bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
const urlencodedParser = bodyParser.urlencoded({ extended: false });

//GET home page.
router.get("/", function(req, res) {
    res.render("index", { title: "Express" });
});

router.get("/welcome", function(req, res) {
    res.render("welcome");
});

router.get("/login", function(req, res) {
    res.render("login");
});

// 登录请求
router.post('/login', urlencodedParser, (req, res) => {
    var checkLogin = ssh2.CheckLogin;

    checkLogin({
        username: req.body.username,
        password: req.body.password,
        host: '45.78.23.15'
    },function (result) {
        res.json(result);
    });
});

module.exports = router;
