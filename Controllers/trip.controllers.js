const Trip = require("../models/Trip.model")
const mongoose = require('mongoose');


const saveTrip = (req, res, next) => {

    const { origin, originId, destination, destinationId, hourDeparture, date, price, passengers, duration, hourArrival, pets, smoke } = req.body
    const { _id } = req.payload

    console.log("--------", req.body)

    const newOrigin = {
        name: origin,
        id: originId
    }

    const newDestination = {
        name: destination,
        id: destinationId
    }

    Trip
        .create({
            origin: newOrigin, destination: newDestination, date: date, hourDeparture: hourDeparture,
            price: price, passengers: passengers, duration: duration, hourArrival: hourArrival, owner: _id,
            pets: pets, smoke: smoke
        })
        .then((respon) => res.json(respon))
        .catch(next)
}


const getTrip = (req, res, next) => {
    const { originId, destinationId, date: date } = req.params;


    Trip.find({ "origin.id": originId, "destination.id": destinationId, "date": date })
        .then(response => { res.json(response) })
        .catch(next);
}

const getOneTrip = (req, res, next) => {

    const { idTrip } = req.params

    Trip
        .findById(idTrip)
        .then(respond => res.json(respond))
        .catch(next)

}


const tripRequest = (req, res, next) => {

    const { idUser, idTrip } = req.body
    let newData

    Trip
        .findById(idTrip)
        .then(data => {
            if (data.request.includes(idUser)) {
                newData = data.request.filter(elem => elem != idUser)
            }
            else {
                data.request.push(idUser)
                newData = data.request
            }

            Trip
                .findByIdAndUpdate(idTrip, { "request": newData })
                .then(respondo => res.json("update"))
                .catch(next)

        })
        .catch(next)

}

const tripPassengers = (req, res, next) => {

    const { idUser, idTrip } = req.body
    let newData

    Trip
        .findById(idTrip)
        .then(data => {
            if (!data.passengers.includes(idUser)) {
                newDataRequest = data.request.filter(elem => elem != idUser)
                data.passengers.push(idUser)
                newDataPassengers = data.passengers
            }

            Trip
                .findByIdAndUpdate(idTrip, { "request": newDataRequest, "passengersIds": newDataPassengers })
                .then(respondo => res.json("update"))
                .catch(next)

        })
        .catch(next)

}



const getOwnerTrips = (req, res, next) => {

    const { idUser } = req.params

    console.log("en servidor")

    Trip
        .find({ "owner": idUser })
        .populate("request")
        .exec()
        .then(data => res.json(data))
        .catch(next);


}







module.exports = { saveTrip, getTrip, getOneTrip, tripRequest, getOwnerTrips, tripPassengers }