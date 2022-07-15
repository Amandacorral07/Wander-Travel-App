const express = require('express')

const router = express.Router()

const Flight = require('../models/flights')

router.get('/mine', (req, res)=>{
    
    Flight.find({owner: req.session.userId})
    .then(trip =>{
        res.render('trip/index', { flights })
    })
    .catch(err=>{
        console.log(err)
        res.json(err)
    })
})


module.exports =router