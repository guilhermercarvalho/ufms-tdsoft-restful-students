import express from 'express'
import studentsController from '../controllers/students'

const router = express.Router()

router.get('/', studentsController.getAll)

router.get('/:id', studentsController.get)

router.post('/', studentsController.create)

router.put('/:id', studentsController.update)

router.delete('/:id', studentsController.destroy)

router.put('/', studentsController.invalidEndpoint)

router.delete('/', studentsController.invalidEndpoint)

router.post('/:id', studentsController.invalidEndpoint)

module.exports = router
