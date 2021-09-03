const conn = require('../database')

const movieSchema = new conn.Schema({
    title: { type: String, required: true },
    storeline: String,
    director: String,
    release: Date,
    gender: Array,
    imageURL: String,
    trailler: String
})

const Movie = conn.model('movies', movieSchema)

module.exports = Movie