const Movie = require('../models/Movies')

class MoviesController{
    showOne = async(req, res) => {
        const { id } = req.params
        const query = await Movie.findOne(_id=id)
        if(!query)
            return res.status(404).json({message: "ID not found!"})
        
        return res.status(200).json(query)
        
    }

    showAll = async(req, res) => {
        const query = await Movie.find()
        return res.json(query)
    }

    create = async(req, res) => {
        const{ title, storeline, director, release, gender, imageURL, trailler } = req.body

        const query = new Movie({
            title,
            storeline,
            director,
            release, 
            gender,
            imageURL,
            trailler
        })

        await query.save()
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