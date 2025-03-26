const express = require('express');
const collectionUfs = require('./data/ufs');

const app = express();

app.get('/ufs', (req, res) => {
    res.json(collectionUfs.colecaoUf);
});

app.get('/ufs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const uf = collectionUfs.colecaoUf.find(uf => uf.id === id);
    res.json(uf);
});

app.listen(8080, () => {
    const data = new Date();
    console.log(`Server started at ${data}`);
});