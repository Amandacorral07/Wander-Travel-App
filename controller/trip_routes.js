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


router.post('/vacation/save', (req, res) => {

        console.log("this is",req.body)
        const flightId = req.params.id
        // console.log(req.params.id)
        req.body.travelers = req.body.userId
        // console.log(req.session.userId)

        const userId = req.session.userId
        console.log(userId)
        const flight = {
            itineraries: [{
                segments: [{
                    departure:{
                        iataCode: req.body.iataCodeDep,
                        terminal: req.body.terminalDep,
                        at: req.body.atDep,
                    },
                    arrival: {
                        iataCode: req.body.iataCodeArr,
                        terminal: req.body.terminalArr,
                        at: req.body.atArr,
                    }, 
                }],
                segments: [{
                    departure:{
                        iataCode: req.body.iataCodeDepart,
                        terminal: req.body.terminalDepart,
                        at: req.body.atDepart,
                    },
                    arrival: {
                        iataCode: req.body.iataCodeArrival,
                        terminal: req.body.terminalArrival,
                        at: req.body.atArrival,
                    }, 
                }],
                segments: [{
                    departure:{
                        iataCode: req.body.iataCodeDeparture,
                        terminal: req.body.terminalDeparture,
                        at: req.body.atDeparture,
                    },
                    arrival: {
                        iataCode: req.body.iataCodeArrivals,
                        terminal: req.body.terminalArrivals,
                        at: req.body.atArrivals,
                    }, 
                }]
            }],
            price:{
                total: req.body.total
            },
        }
        console.log(flight)
        return Flight.create(
            flight
        )

        .then(trip =>{       
            res.render('trip/index', {userId, flight} )
        })

        .catch(function(responseError){
            console.log(responseError)})
})



router.delete('/delete/:id', (req, res)=>{
    const flightId = req.params.id

    Flight.find({id: flightId})

    .then(trip =>{

        flightId.remove()

        return trip.save()
    })

    .then(trip =>{
        res.redirect('/flights/vacationShow', )
    })
    .catch(err=>{
        res.send(err)
    })
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