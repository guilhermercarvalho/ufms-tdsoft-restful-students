import express from 'express';
import studentsController from '../controllers/students'

const router = express.Router();

router.get('/alunos', studentsController.getAll);

router.get('/alunos/:id', studentsController.get);

router.post('/alunos', studentsController.create);

router.put('/alunos/:id', studentsController.update);

router.delete('/alunos/:id', studentsController.destroy);

module.exports = router;