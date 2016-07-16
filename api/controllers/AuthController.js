"use strict";
var passport = require('passport');
function login(req, res) {
    console.log('auth.login');
    passport.authenticate('local', function (err, user, info) {
        console.log(user);
        if ((err) || (!user)) {
            console.log('err:');
            console.log(err);
            console.log(info);
            return res.send({
                message: info.message,
                user: user
            });
        }
        req.logIn(user, function (err) {
            console.log('req.logIn:');
            console.log(user);
            if (err)
                return res.send(err);
            return res.send({
                message: info.message,
                user: user
            });
        });
    }).call(req, res);
}
exports.login = login;
function logout(req, res) {
    req.logout();
    return res.json(200, true);
}
exports.logout = logout;
function authenticated(req, res) {
    if (req.isAuthenticated()) {
        return res.json(200, true);
    }
    else {
        return res.json(200, false);
    }
}
exports.authenticated = authenticated;
