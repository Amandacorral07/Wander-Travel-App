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
        // const originLocationCode = req.body.city
        // console.log(originLocationCode)
        // const destinationLocationCode= req.body.destination
        // console.log(destinationLocationCode)
        // const departureDate= req.body.departure
        // console.log(departureDate)
        // const returnDate = req.body.return
        // console.log(returnDate)
        // const adults = req.body.adults
        // console.log(adults)
        // const currency = req.body.currency
        // console.log(currency)
        // const nonStop = req.body.nonStop
        // console.log(nonStop)

        console.log(req.params.id)
        const flightId = req.params.id
        req.body.author = req.body.userId
        console.log(req.session.userId)


        // amadeus.shopping.flightOffersSearch.get({
        // "originLocationCode": originLocationCode,
        // "destinationLocationCode":destinationLocationCode,
        // "departureDate": departureDate,
        // "returnDate": returnDate,
        // "adults": adults,
        // "currencyCode": currency,
        // "numberOfStops": nonStop
        // })
        // .then(response=>{
        //     console.log(response)
        //     return response
        // })

        
        // Flight.create({
        //     originCity: response.data[0].itineraries[0].segments[0].departure.iataCode,
        //     destinationLocationCode:response.data[0].itineraries[0].segments[0].arrival.iataCode ,
        //     terminal: response.data[0].itineraries[0].segments[0].arrival.terminal ,
        //     departureDate: response.data[0].itineraries[0].segments[0].departure.at,
        //     returnDate: response.data[0].itineraries[0].segments[0].arrival.at,
        //     numberOfStops: response.data[0].itineraries[0].segments[0].numberOfStops,
        // })
        // .then((response)=>{
        //     console.log(response)
        //     return response.save()
        // })
        
        Flight.find({travelers:req.session.userId})
        
        
        Flight.find({flightId}).insertOne({flightId})
        
        // .toArray(function(err, result){
        //     Flight.insert(modifiedResult, function(err, result){
        //         if(err){

        //         }
        //     })
        // })
       
            // console.log({id: flightId})
        
        // .then(response=> {
        //     // single fruit doc there is a field called comments
        //     // trip.flights.push(req.params.flightId)

        //     // if we change a doc, we have to return and call .save() on the doc.
        //     return response.save()
        // })
        .then(res => {
            res.redirect(`/trip/index`)
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