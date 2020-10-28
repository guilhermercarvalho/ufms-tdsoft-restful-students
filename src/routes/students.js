const express = require('express');
const router = express.Router();
const db = require('../../database/index')

router.get('/', (req, res, next) => {
    res.status(200).send({
        messagem: "Alunos"
    });
});

router.get('/teste', (req, res, next) => {
    const qr = req.query
    res.status(200).send({
        messagem: "Alunos",
        query: qr
    });
});

router.get('/:id_student', (req, res, next) => {
    const id = req.params.id_student
    // let aluno_name = db.run("SELECT * FROM aluno")
    
    let aluno_name = db.all()

    console.log(aluno_name)
    res.status(200).send({
        messagem: "Alunos",
        id: aluno_name
    });
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        message: "POST alunos"
    })
});

router.put('/', (req, res, next) => {
    res.status(200).send({
        messagem: "Alunos"
    });
});

router.delete('/', (req, res, next) => {
    res.status(200).send({
        messagem: "Alunos"
    });
});

module.exports = router;