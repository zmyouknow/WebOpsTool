var Client = require('ssh2').Client;

/**
 * @description 验证用户登录
 * @param server - 验证信息 eg. {'username': 'xxx', 'password': 'xxx', hostname: '127.0.0.1'}
 */
function CheckLogin(server){
    var login_result = {
        "success": false,
        "msg": ""
    };

    var conn = new Client();
    conn.on('ready', function(){
        conn.exec('hostname', function(err, stream) {
            if (err) {
                login_result['msg'] = err;
            } else {
                stream.on('close', function(code, signal) {
                    conn.end();
                }).on('data', function(data) {
                    login_result['success'] = true;
                    login_result['msg'] = "User: %s login %s success!" % (server.username, server.hostname);
                }).stderr.on('data', function(data) {
                    login_result['msg'] = data;
                });
            };
        });
    }).connect({
        host: server.hostname,
        port: 22,
        username: server.username,
        password: server.password
    });
    
    return login_result;
}

exports.CheckLogin = CheckLogin;