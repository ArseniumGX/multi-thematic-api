const router = require('express').Router()
const moviesControllers = require('../controllers/moviesControllers')

router.get('/', moviesControllers.showAll)
router.post('/', moviesControllers.create)
router.get('/:id', moviesControllers.showOne)
router.put('/:id', moviesControllers.update)
router.delete('/:id', moviesControllers.delete)


module.exports = router