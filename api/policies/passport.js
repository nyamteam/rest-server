"use strict";
var sails = require('sails');
var passport = require('passport');
var passport_local = require('passport-local');
var bcrypt = require('bcrypt');
module.exports = function (req, res, next) {
    sails.log.verbose(__filename + ':' + ' [Policy.Passport() called]');
    var LocalStrategy = passport_local.Strategy;
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });
    passport.deserializeUser(function (id, done) {
        sails.models.User.findOne({ id: id }, function (err, user) {
            done(err, user);
        });
    });
    var login = function (username, password, done) {
        sails.log.verbose(__filename + ':' + ' [service.passport.login() called]');
        console.log("service.passport.login");
        sails.models.model.User.findOne({ name: username }, function (err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            bcrypt.compare(password, user.password, function (err, res) {
                if (!res)
                    return done(null, false, {
                        message: 'Invalid Password'
                    });
                return done(null, user, {
                    message: 'Logged In Successfully'
                });
            });
        });
    };
    passport.use(new LocalStrategy({
        usernameField: 'name',
        passwordField: 'password'
    }, login));
    console.log('Passport init');
    passport.initialize()(req, res, next);
};
