const { getUser, editUSerpersonalData } = require("../controllers/user.controllers")
const { isAuthenticated } = require("../middlewares/verifyToken.middleware")

const router = require("express").Router()


router.get("/:idUser", isAuthenticated, getUser)
router.put("/editUSerpersonalData", isAuthenticated, editUSerpersonalData)






module.exports = router