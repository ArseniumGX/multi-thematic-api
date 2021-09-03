const router = require('express').Router()
const moviesRoutes = require('./routes/movies.routes')

router.get('/', (req, res) => res.end('root'))
router.get('/api', (req, res) => res.end('root'))
router.use('/api/movies', moviesRoutes)

module.exports = router