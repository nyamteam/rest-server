/// <reference path="../../typings/index.d.ts" />

import * as sails from 'sails'

export function init(req:sails.Request, res:sails.Response): sails.Response {
        return res.json(200, true);
}