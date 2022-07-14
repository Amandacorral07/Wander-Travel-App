const express = require('express')

const router = express.Router()
const Amadeus = require('amadeus')

const amadeus = new Amadeus({
	clientId: process.env.APIKEY,
	clientSecret: process.env.APISECRET
})

const Flight = require('../models/flights')

router.post('/vacation',(req, res) =>{
    amadeus.shopping.flightOffersSearch.get({
        originLocationCode: 'SYD',
        destinationLocationCode: 'BKK',
        departureDate: '2022-11-01',
        adults: '1'
        })
        .then(function(response){
        return amadeus.shopping.flightOffers.pricing.post(
        JSON.stringify({
            'data': {
            'type': 'flight-offers-pricing',
            'flightOffers': [response.data[0]]
            }
        }))})
        .then(function(response){
        console.log(response)})
        .catch(function(responseError){
        console.log(responseError)})
})




//     //rendering input info from beachy.liqud
//     const originLocationCode = req.body.city
//     console.log(originLocationCode)
//     const destinationLocationCode= req.body.destination
//     console.log(destinationLocationCode)
//     const departureDate= req.body.departure
//     console.log(departureDate)
//     const adults = req.body.adults
//     console.log(adults)
    // calling apiURL in place of actual API URL
    // const apiURL = `"https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${originLocationCode}&destinationLocationCode=${destinationLocationCode}&departureDate=${departureDate}&adults=${adults}&max=2"`
    // Flight.find(originLocationCode, {originLocationCode})
    // attempting to fetch API URL 
    // const data = {
    //     "originLocationCode": originLocationCode,
    //     "destinationLocationCode":destinationLocationCode,
    //     "departureDate": departureDate,
    //     "adults": adults
    // }
    // amadeus.client.get('/v1/shopping/flight-offers/pricing', JSON.stringify({ data }))
    // fetch(apiURL)
    // amadeus.shopping.flightOffersSearch.get({
    //     originLocationCode: `${originLocationCode}`,
    // destinationLocationCode: `${destinationLocationCode}`,
    // departureDate: `${departureDate}`,
    // adults: `${adults}`
    // })
    //getting raw data
//     .then(response => {
//         console.log(response.data)
//         return response
//     })

//     .then(response =>{
//         console.log(response.data);
//         res.render('flights/beachyShow', {data: data})
//     })

//     .catch(function(responseError){
//         console.log(responseError);
//     })





// router.get('/', (req, res)=>{
//     res.render('flights/index')
// })
// router.get('/beachy', (req, res)=>{
//     res.render('flights/beachy')
//     })
//     router.get('/cozy', (req, res)=>{
//     res.render('flights/cozy')
//     })
//     router.get('/tasty', (req, res)=>{
//     res.render('flights/tasty')
//     })
//     router.get('/romantic', (req, res)=>{
//     res.render('flights/romantic')
//     })
//     router.get('/adventerous', (req, res)=>{
//     res.render('flights/adventerous')
//     })

  
// amadeus.shopping.flightOffersSearch.get({
//     originLocationCode: 'SYD',
//     destinationLocationCode: 'BKK',
//     departureDate: '2022-11-01',
//     adults: '2'
//   }).then(function(res){
//     res.render('flights/beachy')
//     console.log(res.body);   //=> The raw body
//     console.log(res.result); //=> The fully parsed result
//     console.log(res.data);   //=> The data attribute taken from the result
//   }).catch(function(error){
//     console.log(error.res); //=> The response object with (un)parsed data 
//     console.log(error.code); //=> A unique error code to identify the type of error
//   });

//   amadeus.shopping.flightOffersSearch.post(req.body)
//GET- Index

// amadeus.referenceData.locations.cities.get({
//     keyword: 'Paris'
// }).catch(function (response) {
//     console.error(response);
// });
// router.post('/beachy', (req, res)=>{
//     const citySearch = req.body.citySearch
//     console.log("citySearch", citySearch)
    // amadeus.referenceData.locations.cities.get({
    //     keyword: citySearch
    // }).then(res => res.json())
        
    // .then(data=>{
    //     res.render('flights/beachy', {data})
    // })
    // .catch(err=>{
    //     res.json(err)
    // })
    // const apiUrl =``
// })
// router.get('/:id', (req, res)=>{
//     const flights = req.body
//     console.log(flights)
//     Flight.findOne(flights)
//     .then(flight =>{
//         res.render('flights/show', {flight})
//     })
//     .catch(err=>{
//         res.json(err)
//     })
// })







module.exports =router