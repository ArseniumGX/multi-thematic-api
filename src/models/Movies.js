const conn = require('../database')

const movieSchema = new conn.Schema({
    title: { type: String, required: true },
    storeline: { type: String, default: ""},
    director: { type: Array, default: []},
    release: { type: Date, default: Date},
    gender: { type: Array, default: []},
    imageURL: { type: String, default: ""},
    trailer: { type: String, default: ""}
})

const Movie = conn.model('movies', movieSchema)

module.exports = Movie