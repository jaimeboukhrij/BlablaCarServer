const { saveTrip, getTrip, getOneTrip, tripRequest } = require("../controllers/trip.controllers")
const { isAuthenticated } = require("../middlewares/verifyToken.middleware")

const router = require("express").Router()


router.get("/:origin/:destination/:date/:originId/:destinationId", getTrip)
router.get("/:idTrip", isAuthenticated, getOneTrip)
router.post("/", isAuthenticated, saveTrip)
router.put("/tripRequest/:idUser", isAuthenticated, tripRequest)





module.exports = router