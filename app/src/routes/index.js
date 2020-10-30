import express from 'express';
import studentsController from '../controllers/students'

const router = express.Router();

router.get('/', studentsController.getAll);

router.get('/:id', studentsController.get);

router.post('/', studentsController.create);

router.put('/:id', studentsController.update);

router.delete('/:id', studentsController.destroy);

module.exports = router;