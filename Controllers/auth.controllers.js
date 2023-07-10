const User = require("../models/User.model")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const saltRounds = 10



const singup = (req, res, next) => {

    const { firstName, lastName, email, password, date, avatar } = req.body


    User
        .create({ firstName, lastName, email, password, bornDate: date, avatar })
        .then((createdUser) => {

            const { firstName, lastName, email, date, avatar } = createdUser
            const user = { firstName, lastName, email, date, avatar }

            res.status(201).json({ user })
        })
        .catch(err => next(err))
}

const checkEmail = (req, res, next) => {

    const { email } = req.params

    User
        .findOne({ email })
        .then((respon) => res.json(respon))
        .catch(err => next(err))
}


const login = (req, res, next) => {

    const { email, password } = req.body;

    if (email === '' || password === '') {
        res.status(400).json({ message: "Provide email and password." });
        return;
    }

    User
        .findOne({ email })
        .then((foundUser) => {

            if (!foundUser) {
                res.status(401).json({ message: "User not found." })
                return;
            }

            if (bcrypt.compareSync(password, foundUser.password)) {

                const { userName, firstName, email, _id, avatar } = foundUser;
                const payload = { userName, firstName, email, _id, avatar }


                const authToken = jwt.sign(
                    payload,
                    process.env.TOKEN_SECRET,
                    { algorithm: 'HS256', expiresIn: "6h" }
                )

                res.json({ authToken: authToken });
            }
            else {
                res.status(401).json({ message: "Unable to authenticate the user" });
            }

        })
        .catch(err => next(err));
}

const verify = (req, res, next) => {

    res.status(200).json(req.payload)
}












module.exports = {
    singup, login, verify, checkEmail
}