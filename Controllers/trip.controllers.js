const Trip = require("../models/Trip.model")


const saveTrip = (req, res, next) => {

    const { origin, originId, destination, destinationId, hourDeparture, date, price, passengers, duration, hourArrival } = req.body
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
            price: price, passengers: passengers, duration: duration, hourArrival: hourArrival, owner: _id
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








module.exports = { saveTrip, getTrip }