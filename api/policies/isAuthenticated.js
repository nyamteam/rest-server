"use strict";
module.exports = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    else {
        return res.send(401, 'Need to be logged');
    }
};
