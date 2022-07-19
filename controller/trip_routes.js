const express = require('express')

const router = express.Router()

const Amadeus = require('amadeus')

const amadeus = new Amadeus({
	clientId: process.env.APIKEY,
	clientSecret: process.env.APISECRET
})

const Flight = require('../models/flights')

// router.get('/new',(req, res)=>{
//     res.render('trip/new')
// })


router.post('/vacation/:id', (req, res) => {

        const flightId = req.params.id
        console.log(req.params.id)
        req.body.travelers = req.body.userId
        console.log(req.session.userId)

        Flight.findOne({id:flightId})

        .then(trip =>{
            trip.itineraries.push(req.body)
            console.log(req.body)
            return trip.save()        

        })

        .then(flight => {
            console.log(flight)
            res.render(`trip/index`, {flight})
        })
        .catch(function(responseError){
            console.log(responseError)})
})







// router.get('/mine', (req, res)=>{
    
//     Flight.find({owner: req.session.userId})
//     .then(trip =>{
//         res.render('trip/index')
//     })
//     .catch(err=>{
//         console.log(err)
//         res.json(err)
//     })
// })


module.exports =router