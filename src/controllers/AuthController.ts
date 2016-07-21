/// <reference path="../../typings/index.d.ts" />

import * as sails from 'sails'
import * as passport from 'passport'

/**
 * Login callback to log a user
 *
 * Passport exposes a login() function on request (also aliased as logIn()) that
 * can be used to establish a login session. When the login operation completes,
 * user will be assigned to req.user.
 * 
 * For more information on logging in users in Passport.js, check out:
 * http://passportjs.org/guide/login/
 * 
 * @param   {sails.Request}   req    Request object
 * @param   {sails.Response}  res    Response object
 */
export function login(req: sails.Request, res: sails.Response, next) {

        passport.authenticate('local', function(err, user, info) {
                if ((err) || (!user)) {
                        return res.send({
                                message: info.message,
                                user: user
                        });
                }
                req.logIn(user, function(err) {
                        if (err) res.send(err);
                        return res.send({
                                message: info.message,
                                user: user
                        });
                });
        })(req, res, next);
}

/**
 * Log out a user
 *
 * Passport exposes a logout() function on request (also aliased as logOut()) that can be
 * called from any route handler which needs to terminate a login session. Invoking logout()
 * will remove the request.user property and clear the login session (if any).
 *
 * For more information on logging out users in Passport.js, check out:
 * http://passportjs.org/guide/logout/
 *
 * @param   {sails.Request}   req    Request object
 * @param   {sails.Response}  res    Response object
 */
export function logout(req: sails.Request, res: sails.Response): sails.Response {
        req.logout();

        return res.json({
                        message: 'Logout succed'
                });
}

/**
 * Simple action to check current auth status of user. Note that this will always send
 * HTTP status 200 and actual data will contain boolean false in
 * cases that user is not authenticated.
 *
 * @param   {sails.Request}   req    Request object
 * @param   {sails.Response}  res    Response object
 */
export function authenticated(req, res: sails.Response): sails.Response {
        if (req.isAuthenticated()) {
                return res.json(200, req.user)
        } else {
                return res.json(200, false)
        }
}