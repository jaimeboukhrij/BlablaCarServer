const { saveTrip, getTrip, getOneTrip, tripRequest, getOwnerTrips,
    tripPassengers, userTrips, saveReviews, getUserReview
} = require("../controllers/trip.controllers")
const { isAuthenticated } = require("../middlewares/verifyToken.middleware")

const router = require("express").Router()


router.get("/:origin/:destination/:date/:originId/:destinationId/:passengers", getTrip)
router.get("/:idTrip", getOneTrip)
router.get("/owner/:idUser", isAuthenticated, getOwnerTrips)
router.post("/", isAuthenticated, saveTrip)
router.put("/tripRequest", isAuthenticated, tripRequest)
router.put("/passengers", isAuthenticated, tripPassengers)
router.get("/userTrips/:idUser", userTrips)
router.put("/reviews", saveReviews)
router.get("/userReviews/:idUser", getUserReview)





module.exports = router