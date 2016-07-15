/// <reference path="../../typings/index.d.ts" />

import * as sails from 'sails'
export function callback(req:sails.Request,res:sails.Response): sails.Response {
        return res.send("callback");
}

export function logout(req:sails.Request, res:sails.Response): sails.Response {
        return res.send("logout");
}
