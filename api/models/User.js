"use strict";
var bcrypt = require('bcrypt');
exports.attributes = {
    name: {
        type: 'string',
        required: true,
    },
    password: {
        type: 'string',
        required: true
    },
    toJSON: function () {
        var obj = this.toObject();
        delete obj.password;
        return obj;
    }
};
function beforeCreate(user, cb) {
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) {
                console.log(err);
                cb(err);
            }
            else {
                user.password = hash;
                cb();
            }
        });
    });
}
exports.beforeCreate = beforeCreate;
