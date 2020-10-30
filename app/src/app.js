import express from "express";
const app = express();

import router from './routes';

app.get('/', (req, res, next) => {
    return res.redirect('/alunos')
})

app.use('/alunos', router)

app.use((req, res, next) => {
    res.status(404).send({
        erro: {
            mensagem: "Endpoind não encontrado"
        }
    })
});

app.use((error, req, res, next) => {
    res.status([error.status] || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});

export default app;