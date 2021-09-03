const Movie = new require('../models/Movies')


class MoviesController{
    showOne = (req, res) => {
        return res.json({message: "It's ok!"})
    }

    showAll = async(req, res) => {
        const query = await Movie.find()
        return res.json(query)
    }

    create = (req, res) => {
        return res.json({message: "It's ok!"})
    }

    update = (req, res) => {
        return res.json({message: "It's ok!"})
    }

    delete = (req, res) => {
        return res.json({message: "It's ok!"})
    }
}

module.exports = new MoviesController