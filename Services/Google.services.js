const axios = require('axios');

class GoogleServices {

    constructor() {

        this.api = axios.create({
            baseURL: "https://maps.googleapis.com/maps/api",
            params: {
                key: "AIzaSyBtc80oZ9lOnbwQODIRr0lG8MOlhxpXb94",
                types: '(cities)', // Limita la búsqueda a ciudades
                components: 'country:es',

            }
        })
    }

    autoComplete(query) {
        return this.api.get(`/place/autocomplete/json?input=${query}`)
    }
}

const googleApi = new GoogleServices()

module.exports = { googleApi }