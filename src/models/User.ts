/// <reference path="../../typings/index.d.ts" />

import * as bcrypt  from 'bcrypt'

export const attributes = {
    email: { 
            type: 'string' ,
            required: true,
            unique: true
    }, 
    password: { 
            type: 'string',
            required: true
    },
    balance: { 
            type: 'float',
            required: true,
            defaultsTo:100
    },
    toJSON: function() {
            var obj = this.toObject()
            delete obj.password
            return obj
    }
}

export function beforeCreate(user, cb): void {
        bcrypt.genSalt(10, function(err, salt){
                bcrypt.hash(user.password, salt, function(err, hash){
                        if(err){
                                console.log(err)
                                cb(err)
                        } else {
                                user.password = hash
                                cb()
                        }
                })
        })
}