const router = require('express').Router()
const moviesRoutes = require('./routes/movies.routes')

router.get('/', (req, res) => {
    return res.status(200).json({
        author: "José Pereira Macedo",
        alias: "ArseniumGX",
        website: "https://arseniumgx.herokuapp.com/",
        occupation: "Developer Web Fullstack Javascript Jr",
        message: "ArseniumGX's API dev from Blue EdTech Module III (Fullstack)"
    })
})

router.get('/api', (req, res) => {
    return res.status(200).json(
        {
            version: "v1",
            API: {
                routes: 
                [
                    {
                        path: "/movies",
                        methodsAccept: ["GET", "POST", "PUT", "DELETE"],
                        model: {
                            title: "*required",
                            synopsis: "",
                            director: [],
                            release: 1900,
                            gender: [],
                            imageURL: "",
                            trailer: ""
                        },
                        state: "Implemented"
                    },
                    {
                        path: "/games",
                        methods: ["GET", "POST", "PUT", "DELETE"],
                        model: "Not defined",
                        state: "under constuction"
                    },
                    {
                        path: "/musics",
                        methods: ["GET", "POST", "PUT", "DELETE"],
                        model: "Not defined",
                        state: "Not implemented"
                    }
                ]
            }
        }
    )
})

router.use('/api/movies', moviesRoutes)

module.exports = router