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


router.post('/vacation/:id', async (req, res) => {

        // let flightId = req.params.id
        // let userInfo = req.session.username
        // const filter= { id: flightId}
        // const update = { travelers : userInfo}

        // let doc = await Flight.findByIdAndUpdate( filter, update, {returnOriginal : false})

        // res.redirect(`flights/vacation/${flightId}`)
        req.body.travelers = req.session.userId


        const flightId = req.params.id
        console.log("This is the req.params.id", req.params.id)
        console.log('This is the flightId', flightId )
        req.body.travelers = req.session.userId
        console.log("This is userID" , req.session.userId)

        const userId = req.session.userId

        console.log("this req.body", req.body)
        Flight.findById(flightId)

        .then(flight =>{
            console.log("this is the flight info", flight)
            flight.itineraries.push(req.body)
            console.log(req.body)
            flight.save()  
            console.log("this is the flight", flight )  
            res.render('trip/index', {flight})    
        })

        // .then(flight => {
        //     console.log(flight)
        //     res.render(`trip/index`, {flight})
        // })
        .catch(function(responseError){
            console.log(responseError)})
})

router.get('/show/:id', (req, res)=>{
    const flightId = req.params.id
    console.log("This is the req.params.id", req.params.id)
        console.log('This is the flightId', flightId )
        req.body.travelers = req.session.userId
        console.log("This is userID" , req.session.userId)
    Flight.findById(flightId)
    .then(flight=>{
        console.log("This is the flight info", flight)
        res.render('trip/show', {flight})
    })
    .catch(err=>{
        console.log(err)
    })
    })

router.get('/index', (req, res)=>{
    res.render('trip/index')
})



router.get('/show/:id', async (req,res) => {
    let flightId = req.params.id
    let userInfo = req.session.username

    const filter = { travelers : userInfo }

    let myTrips = await Flight.find(filter)
    
    
    res.render('./trip/index',  {myTrips})


})



module.exports =router