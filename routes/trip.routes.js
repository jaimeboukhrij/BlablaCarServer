const { saveTrip, getTrip } = require("../controllers/trip.controllers")
const { isAuthenticated } = require("../middlewares/verifyToken.middleware")

const router = require("express").Router()


router.get("/:origin/:destination/:date/:originId/:destinationId", getTrip)
router.post("/", isAuthenticated, saveTrip)




module.exports = router