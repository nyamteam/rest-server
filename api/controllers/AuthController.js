"use strict";
var passport = require('passport');
function login(req, res) {
    passport.authenticate('local', function (err, user, info) {
        if ((err) || (!user)) {
            return res.send({
                message: info.message,
                user: user
            });
        }
        req.logIn(user, function (err) {
            if (err)
                res.send(err);
            return res.send({
                message: info.message,
                user: user
            });
        });
    })(req, res, null);
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
