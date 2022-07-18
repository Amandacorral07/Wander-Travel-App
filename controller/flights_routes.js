const express = require('express')

const router = express.Router()
const Amadeus = require('amadeus')
const Flight = require('../models/flights')
// const { response } = require('express')

const amadeus = new Amadeus({
	clientId: process.env.APIKEY,
	clientSecret: process.env.APISECRET
})




router.post('/vacation',(req, res) =>{
        const originLocationCode = req.body.city
        console.log(originLocationCode)
        const destinationLocationCode= req.body.destination
        console.log(destinationLocationCode)
        const departureDate= req.body.departure
        console.log(departureDate)
        const returnDate = req.body.return
        console.log(returnDate)
        const adults = req.body.adults
        console.log(adults)


        amadeus.shopping.flightOffersSearch.get({
        "originLocationCode": originLocationCode,
        "destinationLocationCode":destinationLocationCode,
        "departureDate": departureDate,
        "returnDate": returnDate,
        "adults": adults
        })
            .then(response=>{
                console.log(response)
                return response
            })
            .then((response)=>{
                console.log(response.data[0].itineraries[0].segments[0].departure.iataCode)
                Flight.create({
                    originCity: response.data[0].itineraries[0].segments[0].departure.iataCode,
                    destinationLocationCode:response.data[0].itineraries[0].segments[0].arrival.iataCode ,
                    terminal: response.data[0].itineraries[0].segments[0].arrival.terminal ,
                    departureDate: response.data[0].itineraries[0].segments[0].departure.at,
                    // returnDate: response.data[0].itineraries[0].segments[0].arrival.at,
                    numberOfStops: response.data[0].itineraries[0].segments[0].numberOfStops,
                })
                response = response.data
               
                res.render('flights/vacationShow', {response, originCity, destinationLocationCode})
            })
           
            // .then(myData=>{
                // console.log(myData.data[0].itineraries[0].segments[0].departure.iataCode)
                // const data= data[0]

                // console.log("this is", myData)
                // myData = myData.data
                // , {myData}
                // res.render('flights/vacationShow')
                // res.render('flights/beachyShow',myData.data)
            // })
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


