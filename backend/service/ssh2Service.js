var Client = require('ssh2').Client;

const SSH2UTILS = require('./ssh2Utils.js').SSH2UTILS;

/**
 * @description 验证用户登录
 * @param server - 验证信息 eg. {'username': 'xxx', 'password': 'xxx', hostname: '127.0.0.1'}
 */
function CheckLogin(server, then){
    var ssh = new SSH2UTILS();
    var result = ssh.connect(server, function (success, msg) {
        ssh.disconnect();
        then({
            'success': success,
            'msg': msg
        });
    });
}

exports.CheckLogin = CheckLogin;