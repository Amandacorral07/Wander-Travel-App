const express = require('express')

const router = express.Router()
const Amadeus = require('amadeus')

const amadeus = new Amadeus({
	clientId: process.env.APIKEY,
	clientSecret: process.env.APISECRET
})

const Flight = require('../models/flights')
const { response } = require('express')

router.post('/vacation',(req, res) =>{
        const originLocationCode = req.body.city
        console.log(originLocationCode)
        const destinationLocationCode= req.body.destination
        console.log(destinationLocationCode)
        const departureDate= req.body.departure
        console.log(departureDate)
        const adults = req.body.adults
        console.log(adults)

        amadeus.shopping.flightOffersSearch.get({
        "originLocationCode": originLocationCode,
        "destinationLocationCode":destinationLocationCode,
        "departureDate": departureDate,
        "adults": adults
        })
            .then(response=>{
                console.log(response)
                return response
            })
            .then(myData=>{
                // console.log(myData.data[0].itineraries[0].segments[0].departure.iataCode)
                res.render('flights/beachyShow',myData.data)
            })
        .catch(function(responseError){
        console.log(responseError)})
})

router.get('/', (req, res)=>{
    res.render('flights/index')
})
router.get('/beachy', (req, res)=>{
    res.render('flights/beachy')
    })
    router.get('/cozy', (req, res)=>{
    res.render('flights/cozy')
    })
    router.get('/tasty', (req, res)=>{
    res.render('flights/tasty')
    })
    router.get('/romantic', (req, res)=>{
    res.render('flights/romantic')
    })
    router.get('/adventerous', (req, res)=>{
    res.render('flights/adventerous')
    })


module.exports =router