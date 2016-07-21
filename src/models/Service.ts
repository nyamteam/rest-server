/// <reference path="../../typings/index.d.ts" />

export const attributes = {
    title: { 
            type: 'string' ,
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
}