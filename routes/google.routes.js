const { autoComplete } = require("../Controllers/google.controllers")
const { isAuthenticated } = require("../middlewares/verifyToken.middleware")

const router = require("express").Router()


router.get("/autocomplete/:query", autoComplete)






module.exports = router