const router = require("express").Router();

router.use("/auth", require("./auth.routes"))

router.use("/upload", require("./upload.routes"))

router.use("/trip", require("./trip.routes"))

router.use("/google", require("./google.routes"))




module.exports = router;
