const express = require('express')

const router = express.Router()

const Flight = require('../models/flights')

router.get('/new',(req, res)=>{
    res.render('trip/new')
})






router.post('/:flightId', (req, res) => {
    const flightId = req.params.flightId
    req.body.author = req.body.userId

    Flight.find({owner:req.session.userId})
        // after we found a fruit 
        // take that fruit and add the comment
        .then(trip=> {
            // single fruit doc there is a field called comments
            trip.flights.push(req.params.flightId)

            // if we change a doc, we have to return and call .save() on the doc.
            return trip.save()
        })
        .then(flight => {
            res.redirect(`/trip/index`)
        })
        .catch(err => {
            res.json(err)
        })
})







router.get('/mine', (req, res)=>{
    
    Flight.find({owner: req.session.userId})
    .then(trip =>{
        res.render('trip/index')
    })
    .catch(err=>{
        console.log(err)
        res.json(err)
    })
})


module.exports =router