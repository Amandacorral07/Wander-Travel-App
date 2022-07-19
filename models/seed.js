////////////////////////////////////////
// This file runs on `npm run seed`
///////////////////////////////////////

/////////////////////////////////
// import dependencies
/////////////////////////////////
const mongoose = require('./connection')
const Flight = require('./flights')

/////////////////////////////////
// seed code
/////////////////////////////////
// save my db connection to a variable for easy reference later
const db = mongoose.connection

//this runs the callback function when the db connection is opened from this file 
db.on('open', ()=>{
    //array of start fruits
    const startFlights = [
        //LAX --> Adventerous Page =============================================
        {originCity: "Los Angeles", destinationCity: "Arizona", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 2, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "Los Angeles", destinationCity: "Arizona", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 2, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "Los Angeles", destinationCity: "Arizona", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 2, currency: "USD",  class: "First",roundtrip: false},
        {originCity: "Los Angeles", destinationCity: "Arizona", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 2, currency: "USD",  class: "First",roundtrip: false},
        {originCity: "Los Angeles", destinationCity: "Arizona", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 4, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "Los Angeles", destinationCity: "Arizona", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 4, currency: "USD",  class: "First",roundtrip: false},
        {originCity: "Los Angeles", destinationCity: "Arizona", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 4, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "Los Angeles", destinationCity: "Arizona", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 4, currency: "USD",  class: "First",roundtrip: false},

        {originCity: "Los Angeles", destinationCity: "Africa", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 2, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "Los Angeles", destinationCity: "Africa", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 2, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "Los Angeles", destinationCity: "Africa", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 2, currency: "USD",  class: "First",roundtrip: false},
        {originCity: "Los Angeles", destinationCity: "Africa", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 2, currency: "USD",  class: "First",roundtrip: false},
        {originCity: "Los Angeles", destinationCity: "Africa", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 4, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "Los Angeles", destinationCity: "Africa", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 4, currency: "USD",  class: "First",roundtrip: false},
        {originCity: "Los Angeles", destinationCity: "Africa", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 4, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "Los Angeles", destinationCity: "Africa", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 4, currency: "USD",  class: "First",roundtrip: false},

        {originCity: "Los Angeles", destinationCity: "Switzerland", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 2, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "Los Angeles", destinationCity: "Switzerland", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 2, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "Los Angeles", destinationCity: "Switzerland", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 2, currency: "USD",  class: "First",roundtrip: false},
        {originCity: "Los Angeles", destinationCity: "Switzerland", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 2, currency: "USD",  class: "First",roundtrip: false},
        {originCity: "Los Angeles", destinationCity: "Switzerland", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 4, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "Los Angeles", destinationCity: "Switzerland", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 4, currency: "USD",  class: "First",roundtrip: false},
        {originCity: "Los Angeles", destinationCity: "Switzerland", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 4, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "Los Angeles", destinationCity: "Switzerland", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 4, currency: "USD",  class: "First",roundtrip: false},

        {originCity: "Los Angeles", destinationCity: "Iceland", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 2, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "Los Angeles", destinationCity: "Iceland", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 2, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "Los Angeles", destinationCity: "Iceland", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 2, currency: "USD",  class: "First",roundtrip: false},
        {originCity: "Los Angeles", destinationCity: "Iceland", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 2, currency: "USD",  class: "First",roundtrip: false},
        {originCity: "Los Angeles", destinationCity: "Iceland", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 4, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "Los Angeles", destinationCity: "Iceland", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 4, currency: "USD",  class: "First",roundtrip: false},
        {originCity: "Los Angeles", destinationCity: "Iceland", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 4, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "Los Angeles", destinationCity: "Iceland", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 4, currency: "USD",  class: "First",roundtrip: false},



        //JFK --> Adventerous Page =============================================



        {originCity: "New York", destinationCity: "Arizona", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 2, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "New York", destinationCity: "Arizona", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 2, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "New York", destinationCity: "Arizona", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 2, currency: "USD",  class: "First",roundtrip: false},
        {originCity: "New York", destinationCity: "Arizona", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 2, currency: "USD",  class: "First",roundtrip: false},
        {originCity: "New York", destinationCity: "Arizona", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 4, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "New York", destinationCity: "Arizona", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 4, currency: "USD",  class: "First",roundtrip: false},
        {originCity: "New York", destinationCity: "Arizona", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 4, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "New York", destinationCity: "Arizona", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 4, currency: "USD",  class: "First",roundtrip: false},

        {originCity: "New York", destinationCity: "Africa", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 2, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "New York", destinationCity: "Africa", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 2, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "New York", destinationCity: "Africa", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 2, currency: "USD",  class: "First",roundtrip: false},
        {originCity: "New York", destinationCity: "Africa", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 2, currency: "USD",  class: "First",roundtrip: false},
        {originCity: "New York", destinationCity: "Africa", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 4, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "New York", destinationCity: "Africa", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 4, currency: "USD",  class: "First",roundtrip: false},
        {originCity: "New York", destinationCity: "Africa", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 4, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "New York", destinationCity: "Africa", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 4, currency: "USD",  class: "First",roundtrip: false},

        {originCity: "New York", destinationCity: "Switzerland", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 2, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "New York", destinationCity: "Switzerland", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 2, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "New York", destinationCity: "Switzerland", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 2, currency: "USD",  class: "First",roundtrip: false},
        {originCity: "New York", destinationCity: "Switzerland", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 2, currency: "USD",  class: "First",roundtrip: false},
        {originCity: "New York", destinationCity: "Switzerland", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 4, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "New York", destinationCity: "Switzerland", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 4, currency: "USD",  class: "First",roundtrip: false},
        {originCity: "New York", destinationCity: "Switzerland", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 4, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "New York", destinationCity: "Switzerland", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 4, currency: "USD",  class: "First",roundtrip: false},

        {originCity: "New York", destinationCity: "Iceland", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 2, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "New York", destinationCity: "Iceland", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 2, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "New York", destinationCity: "Iceland", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 2, currency: "USD",  class: "First",roundtrip: false},
        {originCity: "New York", destinationCity: "Iceland", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 2, currency: "USD",  class: "First",roundtrip: false},
        {originCity: "New York", destinationCity: "Iceland", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 4, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "New York", destinationCity: "Iceland", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 4, currency: "USD",  class: "First",roundtrip: false},
        {originCity: "New York", destinationCity: "Iceland", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 4, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "New York", destinationCity: "Iceland", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 4, currency: "USD",  class: "First",roundtrip: false},



        //ORD Chicago --> Adventerous Page =============================================





        {originCity: "Chicago", destinationCity: "Arizona", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 2, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "Chicago", destinationCity: "Arizona", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 2, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "Chicago", destinationCity: "Arizona", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 2, currency: "USD",  class: "First",roundtrip: false},
        {originCity: "Chicago", destinationCity: "Arizona", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 2, currency: "USD",  class: "First",roundtrip: false},
        {originCity: "Chicago", destinationCity: "Arizona", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 4, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "Chicago", destinationCity: "Arizona", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 4, currency: "USD",  class: "First",roundtrip: false},
        {originCity: "Chicago", destinationCity: "Arizona", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 4, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "Chicago", destinationCity: "Arizona", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 4, currency: "USD",  class: "First",roundtrip: false},

        {originCity: "Chicago", destinationCity: "Africa", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 2, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "Chicago", destinationCity: "Africa", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 2, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "Chicago", destinationCity: "Africa", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 2, currency: "USD",  class: "First",roundtrip: false},
        {originCity: "Chicago", destinationCity: "Africa", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 2, currency: "USD",  class: "First",roundtrip: false},
        {originCity: "Chicago", destinationCity: "Africa", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 4, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "Chicago", destinationCity: "Africa", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 4, currency: "USD",  class: "First",roundtrip: false},
        {originCity: "Chicago", destinationCity: "Africa", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 4, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "Chicago", destinationCity: "Africa", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 4, currency: "USD",  class: "First",roundtrip: false},

        {originCity: "New York", destinationCity: "Switzerland", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 2, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "New York", destinationCity: "Switzerland", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 2, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "New York", destinationCity: "Switzerland", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 2, currency: "USD",  class: "First",roundtrip: false},
        {originCity: "New York", destinationCity: "Switzerland", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 2, currency: "USD",  class: "First",roundtrip: false},
        {originCity: "New York", destinationCity: "Switzerland", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 4, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "New York", destinationCity: "Switzerland", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 4, currency: "USD",  class: "First",roundtrip: false},
        {originCity: "New York", destinationCity: "Switzerland", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 4, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "New York", destinationCity: "Switzerland", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 4, currency: "USD",  class: "First",roundtrip: false},

        {originCity: "New York", destinationCity: "Iceland", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 2, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "New York", destinationCity: "Iceland", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 2, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "New York", destinationCity: "Iceland", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 2, currency: "USD",  class: "First",roundtrip: false},
        {originCity: "New York", destinationCity: "Iceland", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 2, currency: "USD",  class: "First",roundtrip: false},
        {originCity: "New York", destinationCity: "Iceland", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 4, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "New York", destinationCity: "Iceland", terminal: 6, departureDate: "2022-07-21", returnDate: "2022-08-04", adults: 4, currency: "USD",  class: "First",roundtrip: false},
        {originCity: "New York", destinationCity: "Iceland", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 4, currency: "USD",  class: "Economy",roundtrip: false},
        {originCity: "New York", destinationCity: "Iceland", terminal: 2, departureDate: "2022-07-21", returnDate: "2022-08-11", adults: 4, currency: "USD",  class: "First",roundtrip: false},













        {originCity: "Los Angeles", color: "purple", readyToEat: false},
        {originCity: "Los Angeles", color: "yellow", readyToEat: false},
        {originCity: "Los Angeles", color: "red", readyToEat: false},
        {originCity: "Los Angeles", color: "brown", readyToEat: false},
    ]
    //when we seed data, we usually clear out the db first 
    Fruit.remove({})
    // then we create that data
        .then(deletedFruits =>{
            console.log('this is what remove returns', deletedFruits)

            //now that our delete was successful, we can create our fruits
            Fruit.create(startFruits)
                .then(data=>{
                    console.log('the new fruits', data)
                    db.close()
                })
                .catch(error=>{
                    console.log('error:', error)
                    db.close()
                })
                
        })
        .catch(error =>{
            console.log('error:', error)
            db.close()
        })
    // whether it's successful or not, we want to close our db connection
    // run npm run seed to run once, open connection and then close
})