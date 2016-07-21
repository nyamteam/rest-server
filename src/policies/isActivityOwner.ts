/// <reference path="../../typings/index.d.ts" />

import * as sails from 'sails'

module.exports = function(req: sails.Request, res: sails.Response, next) {
   if (req.isAuthenticated()) {
        return next();
    }
    else{
        return res.send(401, {
                        message: 'Need to be logged'
                    });
    }
};
