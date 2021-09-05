const Movie = require('../models/Movies')

class MoviesController{
    showOne = async(req, res) => {
        const { id } = req.params
        const query = await Movie.findById(id)
        return query ? res.status(200).json({movie: query}) 
                     : res.status(204).json() 
    }

    showAll = async(req, res) => {
        const query = await Movie.find()
        return !query.length < 1 ? res.status(200).json({movies: query}) 
                                 : res.status(204).json()
    }

    create = async(req, res) => {
        const { title, storeline, director, release, gender, imageURL, trailer } = req.body

        const movie = new Movie({
            title,
            storeline,
            director,
            release, 
            gender,
            imageURL,
            trailer
        })

        const query = await movie.save().then(res => res).catch(err => err)

        return query.errors ? res.status(406).json({message: "Some error occurred!", error: query.errors})
                            : res.status(201).json({message: "Movie Registered!", response: query})
    }

    update = async(req, res) => {
        const { id } = req.params
        const { title, storeline, director, release, gender, imageURL, trailer } = req.body

        const query = await Movie.findByIdAndUpdate(id, )

        if(query === false)
            return res.status(404).json({id, message: "Movie not found!"})
        
        return res.json({message: "It's ok!"})
    }

    delete = async(req, res) => {
        const { id } = req.params
        
        const query = await Movie.findByIdAndDelete(id)

        return query ? res.status(202).json({message: "Movie is deleted!", Movie: query}) 
                     : res.status(204).json({message: "Movie isn't registered!"})
    }
}

module.exports = new MoviesController