const { saveTrip, getTrip, getOneTrip, tripRequest, getOwnerTrips,
    tripPassengers
} = require("../controllers/trip.controllers")
const { isAuthenticated } = require("../middlewares/verifyToken.middleware")

const router = require("express").Router()


router.get("/:origin/:destination/:date/:originId/:destinationId", getTrip)
router.get("/:idTrip", isAuthenticated, getOneTrip)
router.get("/owner/:idUser", isAuthenticated, getOwnerTrips)
router.post("/", isAuthenticated, saveTrip)
router.put("/tripRequest", isAuthenticated, tripRequest)
router.put("/passengers", isAuthenticated, tripPassengers)





module.exports = router