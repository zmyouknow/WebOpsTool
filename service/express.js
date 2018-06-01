/**
 * 后台http请求处理模块
 */
var express = require('express');
var ssh2 = require('./ssh2Service');
var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var app = express();

app.use(express.static('../WeAdmin/'));

// 登录请求
app.post('/login', urlencodedParser, (req, res) => {
    var checkLogin = ssh2.CheckLogin;

    checkLogin({
        username: req.body.username,
        password: req.body.password,
        host: '45.78.23.15'
    },function (result) {
        res.json(result);
    });
});

// 监听12345端口
var server = app.listen(4000, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Express stared at http://%s:%s", host, port);
});