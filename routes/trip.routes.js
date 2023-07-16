const { saveTrip, getTrip, getOneTrip, tripRequest, getOwnerTrips,
    tripPassengers, userTrips, saveReviews, getUserReview
} = require("../controllers/trip.controllers")
const { isAuthenticated } = require("../middlewares/verifyToken.middleware")

const router = require("express").Router()


router.get("/:origin/:destination/:date/:originId/:destinationId/:passengers", getTrip)
router.get("/:idTrip", isAuthenticated, getOneTrip)
router.get("/owner/:idUser", isAuthenticated, getOwnerTrips)
router.post("/", isAuthenticated, saveTrip)
router.put("/tripRequest", isAuthenticated, tripRequest)
router.put("/passengers", isAuthenticated, tripPassengers)
router.get("/userTrips/:idUser", isAuthenticated, userTrips)
router.put("/reviews", isAuthenticated, saveReviews)
router.get("/userReviews/:idUser", isAuthenticated, getUserReview)





module.exports = router