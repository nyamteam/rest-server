"use strict";
exports.attributes = {
    title: {
        type: 'string',
        required: true,
        unique: true
    },
    description: {
        type: 'string',
        required: true
    },
    price: {
        type: 'float',
        required: true
    },
    owner: {
        model: 'User'
    }
};
