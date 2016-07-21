"use strict";
module.exports = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    else {
        return res.send(401, {
            message: 'Need to be logged'
        });
    }
};
