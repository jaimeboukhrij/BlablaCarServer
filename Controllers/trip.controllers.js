const Trip = require("../models/Trip.model")
const mongoose = require('mongoose');


const saveTrip = (req, res, next) => {

    const { origin, originId, destination, destinationId, hourDeparture, date, price, passengers, duration, hourArrival, pets, smoke } = req.body
    const { _id } = req.payload

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
    const { originId, destinationId, date: date, passengers: searchPassengers } = req.params;


    Trip.find({ "origin.id": originId, "destination.id": destinationId, "date": date })
        .then(response => {
            const NewData = response.filter((elem) => searchPassengers <= (elem.passengers - elem.passengersIds.length))
            res.json(NewData)
        })
        .catch(next);
}

const getOneTrip = (req, res, next) => {

    const { idTrip } = req.params

    Trip
        .findById(idTrip)
        .populate("passengersIds")
        .populate("owner")
        .exec()
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

    Trip
        .findById(idTrip)
        .then(data => {
            if (!data.passengersIds.includes(idUser)) {
                newDataRequest = data.request.filter(elem => elem != idUser)
                data.passengersIds.push(idUser)
                newDataPassengers = data.passengersIds
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

    Trip
        .find({ "owner": idUser })
        .populate("request")
        .exec()
        .then(data => res.json(data))
        .catch(next);

}

const userTrips = (req, res, next) => {

    const { idUser } = req.params

    const newData = {
        userDriver: [],
        userPassenger: []
    }

    Trip
        .find()
        .populate("owner")
        .exec()
        .then((data) => {
            data.map((elem) => {
                if (elem.owner._id == idUser) {
                    newData.userDriver.push(elem)
                }
                if (elem.passengersIds.includes(idUser)) {
                    newData.userPassenger.push(elem)
                }

            })

            res.json(newData)
        })
        .catch(next)



}






module.exports = { saveTrip, getTrip, getOneTrip, tripRequest, getOwnerTrips, tripPassengers, userTrips }