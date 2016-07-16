/// <reference path="../../typings/index.d.ts" />
import * as sails from 'sails'
import * as passport  from 'passport'
import * as passport_local  from 'passport-local'
import * as bcrypt from 'bcrypt'

let LocalStrategy = passport_local.Strategy

passport.serializeUser(function(user, done) {
    done(null, user.id)
});

passport.deserializeUser(function(id, done) {
    sails.models.User.findOne({ id: id } , function (err, user) {
        done(err, user);
    });
});


const login = (username, password, done) => {
    sails.log.verbose(__filename + ':' + ' [service.passport.login() called]')
    console.log("service.passport.login")

    sails.models.model.User.findOne(
        { name: username }, 
        function (err, user) {
            if (err) { return done(err) }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' })
            }
            
            bcrypt.compare(password, user.password, function (err, res) {
                if (!res)
                    return done(null, false, {
                    message: 'Invalid Password'
                    });
                return done(null, user, {
                    message: 'Logged In Successfully'
                })
            })
        }
    )
}

passport.use(new LocalStrategy({
    usernameField: 'name',
    passwordField: 'password'
  },
  login
))