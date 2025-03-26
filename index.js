const express = require('express');
const ufService = require('./service/ufService');

const app = express();

app.get('/ufs', (req, res) => {
    res.json(ufService.getData());
});

app.get('/ufs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let uf;

    if (ufService.validateUf(id)) {
        uf = ufService.getData().find(uf => uf.id === id);
    }
    uf ? res.json(uf) : res.status(404).json({message: "Uf not found"});
});

app.listen(8080, () => {
    const data = new Date();
    console.log(`Server started at ${data}`);
});