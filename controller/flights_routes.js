const express = require('express')

const router = express.Router()
const Amadeus = require('amadeus')

const amadeus = new Amadeus({
	clientId: process.env.APIKEY,
	clientSecret: process.env.APISECRET
})

const Flight = require('../models/flights')

    amadeus.shopping.flightOffersSearch.get({
    originLocationCode: 'SYD',
    destinationLocationCode: 'BKK',
    departureDate: '2022-11-01',
    adults: '1'
    }).then(function(response){
    return amadeus.shopping.flightOffers.pricing.post(
        JSON.stringify({
        'data': {
            'type': 'flight-offers-pricing',
            'flightOffers': [response.data[0]]
        }
        })
    )
    }).then(function(response){
    console.log(response.data);
    }).catch(function(responseError){
    console.log(responseError);
    })

    // amadeus.shopping.flightOffersSearch.post(JSON.stringify({
    //     "currenyCodye":"USD"
    // }))
    // amadeus.shopping.flightOffersSearch.post(JSON.stringify({
    // "currencyCode": "USD",
    // "originDestinations": [{
    //     "id": "1",
    //     "originLocationCode": "SYD",
    //     "destinationLocationCode": "BKK",
    //     "departureDateTimeRange": {
    //     "date": "2022-08-01",
    //     "time": "10:00:00"
    //     }
    // },
    // {
    //     "id": "2",
    //     "originLocationCode": "BKK",
    //     "destinationLocationCode": "SYD",
    //     "departureDateTimeRange": {
    //     "date": "2022-08-05",
    //     "time": "17:00:00"
    //     }
    // }
    // ],
    // "travelers": [{
    //     "id": "1",
    //     "travelerType": "ADULT",
    //     "fareOptions": [
    //     "STANDARD"
    //     ]
    // },
    // {
    //     "id": "2",
    //     "travelerType": "CHILD",
    //     "fareOptions": [
    //     "STANDARD"
    //     ]
    // }
    // ],
    // "sources": [
    //     "GDS"
    // ],
    // "searchCriteria": {
    //     "maxFlightOffers": 50,
    //     "flightFilters": {
    //     "cabinRestrictions": [{
    //         "cabin": "BUSINESS",
    //         "coverage": "MOST_SEGMENTS",
    //         "originDestinationIds": [
    //         "1"
    //         ]
    //     }],
    //     "carrierRestrictions": {
    //         "excludedCarrierCodes": [
    //         "AA",
    //         "TP",
    //         "AZ"
    //         ]
    //     }
    //     }
    // }
    // })).then(function (response) {
    // console.log(response);
    // }).catch(function (response) {
    // console.error(response);
    // });
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







module.exports = router