const router = require('express').Router()
const moviesRoutes = require('./routes/movies.routes')

router.get('/', (req, res) => res.end(`${process.env.DB_PORT}, ${process.env.DB_URI}, ${process.env.DB_USER}, ${process.env.DB_PASS}, ${process.env.DB_NAME}`))
router.get('/api', (req, res) => res.end('root'))
router.use('/api/movies', moviesRoutes)

module.exports = router