const { getUser, editUSerpersonalData, editUserAvatar } = require("../controllers/user.controllers")
const { isAuthenticated } = require("../middlewares/verifyToken.middleware")

const router = require("express").Router()


router.get("/:idUser", getUser)
router.put("/editUSerpersonalData", isAuthenticated, editUSerpersonalData)
router.put("/editUserAvatar", isAuthenticated, editUserAvatar)






module.exports = router