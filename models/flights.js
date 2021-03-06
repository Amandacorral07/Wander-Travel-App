// using an already connected mongoose not a fresh one from node_modules
// const { Mongoose } = require('mongoose')
const mongoose = require('./connection')
const commentSchema = require('./comment')

// inside of mongoose I want the keys that are named Schema and model
const { Schema, model } = mongoose

// Schema is the rules for the model
const flightOfferSchema = new Schema ({

    id: String,

    itineraries: [{
        segments: [{
            departure:{
                iataCode: String,
                terminal: String,
                at: String,
            },
            arrival: {
                iataCode: String,
                terminal: String,
                at: String,
            }, 
        }]
    }],
    price:{
        currency: String,
        total: String
    },

    
    travelers: {
        type: mongoose.Types.ObjectId,//a single User ._id
        ref: 'User',
        // unique: true // const User = model('User', userSchema)
        // the string of 'User' is how we reference a model
    },

    comments: [commentSchema],

}, {
    timestamps: true

})

// need to make a model
// model is the printing press
// this collection will be called fruits
const Flight = model('Flight', flightOfferSchema)

module.exports= Flight