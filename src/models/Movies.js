const conn = require("../database");

const movieSchema = new conn.Schema({
	title: { type: String, required: true },
	synopsis: { type: String, default: "" },
	director: { type: Array, default: [] },
	release: { type: Number, default: 0 },
	gender: { type: Array, default: [] },
	imageURL: { type: String, default: "" },
	trailer: { type: String, default: "" },
});

const Movie = conn.model("movies", movieSchema);

module.exports = Movie;
