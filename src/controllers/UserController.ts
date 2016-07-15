/// <reference path="../../typings/index.d.ts" />

import * as sails from 'sails'
export function index(req:sails.Request, res:sails.Response): sails.Response {
        return res.send("index");
}
