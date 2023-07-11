const { getUser } = require("../controllers/user.controllers")
const { isAuthenticated } = require("../middlewares/verifyToken.middleware")

const router = require("express").Router()


router.get("/:idUser", getUser)





module.exports = router