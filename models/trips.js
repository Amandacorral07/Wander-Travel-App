// using an already connected mongoose not a fresh one from node_modules
const { Mongoose } = require('mongoose')
const mongoose = require('./connection')
// const commentSchema = require('./comment')

// inside of mongoose I want the keys that are named Schema and model
const { Schema, model } = mongoose

// Schema is the rules for the model
const myTripsSchema = new Schema ({

    Flight: [{
        type: mongoose.Types.ObjectId,//a single User ._id
        ref: 'Flight',
    }]

}, {
    timestamps: true

})

// need to make a model
// model is the printing press
// this collection will be called fruits
const Trip = model('Trip', myTripsSchema)

module.exports= Trip