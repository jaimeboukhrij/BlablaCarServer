const { singup, login, verify, checkEmail } = require("../controllers/auth.controllers")
const { isAuthenticated } = require("../middlewares/verifyToken.middleware")

const router = require("express").Router()


router.post("/signup", singup)
router.post("/login", login)
router.get("/checkemail/:email", checkEmail)
router.get("/verify", isAuthenticated, verify)





module.exports = router