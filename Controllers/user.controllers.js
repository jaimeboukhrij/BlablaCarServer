const User = require("../models/User.model")



const getUser = (req, res, next) => {
    const { idUser } = req.params

    User
        .findById(idUser)
        .then(respond => {
            res.json(respond)
        })
        .catch(next)
}



module.exports = { getUser }