import express from "express";
const app = express();

import students from './routes/students';

app.use('/alunos', students)

app.use((req, res, next) => {
    res.status(200).send({
        message: "OK, it's works"
    });
});

export default app;