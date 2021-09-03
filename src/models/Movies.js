const conn = require('../database')

const movieSchema = new conn.Schema({
    title: { type: String, required: true },
    storeline: { type: String, default: null},
    director: { type: String, default: null},
    release: { type: Date, default: null},
    gender: { type: Array, default: []},
    imageURL: { type: String, default: null},
    trailler: { type: String, default: null}
})

const Movie = conn.model('movies', movieSchema)

module.exports = Movie