const { googleApi } = require("../Services/Google.services")


const autoComplete = (req, res, next) => {

    const { query } = req.params
    googleApi
        .autoComplete(query)
        .then(({ data }) => res.json(data.predictions))

}


module.exports = { autoComplete }