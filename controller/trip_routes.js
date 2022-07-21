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
        console.log(req.params.id)
        req.body.travelers = req.session.userId
        console.log("This is" , req.session.userId)

        const userId = req.session.userId

        Flight.findOne({userId})

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



router.get('/vacation/:id', async (req,res) => {
    let flightId = req.params.id
    let userInfo = req.session.username

    const filter = { travelers : userInfo }

    let myTrips = await Flight.find(filter)
    
    
    res.render('./trip/index',  {myTrips})


})



module.exports =router