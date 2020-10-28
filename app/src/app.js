const express = require("express");
const app = express();

const students = require('./routes/students');

app.use('/alunos', students)

app.use((req, res, next) => {
    res.status(200).send({
        message: "OK, it's works"
    });
});

module.exports = app;