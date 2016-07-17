/// <reference path="../../typings/index.d.ts" />

import * as sails from 'sails'

/**
 * Add create action with req.login(user, function(err) to login user after signup
 */

export function init(req:sails.Request, res:sails.Response): sails.Response {
        return res.json(200, true);
}