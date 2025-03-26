const express = require('express');
const ufService = require('./service/ufService');

const app = express();

app.get('/ufs', (req, res) => {
    const name = req.query.name;
    const ufs = name ? ufService.findByName(name) : ufService.findAll();
    ufs.length > 0 ? res.json(ufs) : res.status(404).json({message: "No UF found"});
});

app.get('/ufs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let uf;
    let message = "Uf not found";

    if (ufService.validateUf(id)) {
        uf = ufService.findById(id);
    } else {
        message = 'Invalid params';
    }
    uf ? res.json(uf) : res.status(404).json({message: message});
});

app.listen(8080, () => {
    const data = new Date();
    console.log(`Server started at ${data}`);
});