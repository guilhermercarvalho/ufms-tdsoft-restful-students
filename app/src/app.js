import express from "express";
const app = express();

import router from './routes';

app.get('/', (req, res) => {
    res.send("Hello")
})

app.use(router)

export default app;