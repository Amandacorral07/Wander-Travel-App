const express = require('express')
// making a router
const router = express.Router()
// importing Fruit model to access database
const Flight = require('../models/flights')

// POST - Creation
// localhost:3000/comments/:fruitId <- A single Fruit can have many comments
router.post('/:id', (req, res) => {
    const flightId = req.params.id
    console.log("This is the flightId", flightId)
    req.body.author = req.session.userId

    console.log("=======================This is the UserID", req.session.userId)

    Flight.findById(flightId)
        // after we found a fruit 
        // take that fruit and add the comment
        .then(flight => {
            // single fruit doc there is a field called comments
            flight.comments.push(req.body)

            // if we change a doc, we have to return and call .save() on the doc.
            return flight.save()
        })
        .then(flight => {
            res.redirect(`/trip/show/${flight._id}`)
        })
        .catch(err => {
            res.json(err)
        })
})

// DELETE - delete yeeting
// localhost:3000/comments/delete/:fruitId/:commId
router.delete('/delete/:flightId/:commId', (req, res)=>{
    const flightId = req.params.flightId
    const commId = req.params.commId

    // find a fruit by it's ID 
    Flight.findById(flightId) // single fruit doc inside a fruit doc will have many comments
    // find this comment by it's ID
        .then(flight=>{
            const comment = flight.comments.id(commId)

             // remove comment
            comment.remove()

            //I've changed the comments field by 1
            return flight.save()
        })
        .then(flight => {
            res.redirect(`/trip/show/${flight._id}`)
        })
        .catch(err =>{
            res.send(err)
        })
   
})

module.exports = router