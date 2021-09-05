const Movie = require('../models/Movies')

class MoviesController{
    showOne = async(req, res) => {
        const { id } = req.params
        const query = await Movie.findById(id)
        return query ? res.status(200).json({response: query}) 
                     : res.status(204).json() 
    }

    showAll = async(req, res) => {
        const query = await Movie.find()
        return !query.length < 1 ? res.status(200).json({response: query}) 
                                 : res.status(204).json({message: "Movie isn't registered!"})
    }

    create = async(req, res) => {
        const { ...params } = req.body

        console.log(params)

        const check = await Movie.findOne({title: params.title})
        if(check) 
            return res.status(409).json({message: "Register already exists!", response: check})

        const movie = new Movie(params)
        const query = await movie.save().then(res => res).catch(err => err)

        return query.errors ? res.status(406).json({message: "Some error occurred!", error: query.errors})
                            : res.status(201).json({message: "Movie Registered!", response: query})
    }

    update = async(req, res) => {
        const { id } = req.params
        const { ...params } = req.body

        const query = await Movie.findByIdAndUpdate(id, params, { new: true })

        return query ? res.status(202).json({message: "Movie updated!", response: query})
                     : ses.status(204).json({message: "Movie isn't registered!"})
    }

    delete = async(req, res) => {
        const { id } = req.params
        
        const query = await Movie.findByIdAndDelete(id)

        return query ? res.status(202).json({message: "Movie is deleted!", response: query}) 
                     : res.status(204).json({message: "Movie isn't registered!"})
    }
}

module.exports = new MoviesController