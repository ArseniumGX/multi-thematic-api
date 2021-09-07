const router = require('express').Router()
const moviesControllers = require('../controllers/moviesControllers')
const validateId = require('../middlewares/validateId')

router.get('/', moviesControllers.showAll)
router.post('/', moviesControllers.create)
router.use('/:id', validateId)
router.get('/:id', moviesControllers.showOne)
router.put('/:id', moviesControllers.update)
router.delete('/:id', moviesControllers.delete)

module.exports = router