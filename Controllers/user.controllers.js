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

const editUSerpersonalData = (req, res, next) => {

    const { talk, music, smoke, pets } = req.body
    const { _id: idUser } = req.payload

    const personalData = {
        talk: talk,
        music: music,
        smoke: smoke,
        pets, pets
    }

    User
        .findByIdAndUpdate(idUser, { personalData })
        .then(respond => res.json(respond))
        .catch(next)
}


const editUserAvatar = (req, res, next) => {

    const { idUser, showImage } = req.body
    console.log("eidtando", req.body)

    User
        .findByIdAndUpdate(idUser, { avatar: showImage })
        .then(respond => res.json(respond))
        .catch(next)
}


module.exports = { getUser, editUSerpersonalData, editUserAvatar }