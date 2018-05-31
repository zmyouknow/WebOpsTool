/**
 * 后台http请求处理模块
 */
var express = require('express');
var ssh2 = require('./ssh2Service');
var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var app = express();

// test
app.get('/', (req, res) => {
    res.send("Hello Express");
});

// 登录请求
app.post('/login', urlencodedParser, (req, res) => {
    var checkLogin = ssh2.CheckLogin;

    var login_result = checkLogin({
        "username": req.body.username,
        "passsword": req.body.passsword,
        "hostname": '45.78.23.15'
    });

    res.json(login_result);
});

// 监听12345端口
var server = app.listen(4000, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Express stared at http://%s:%s", host, port);
});