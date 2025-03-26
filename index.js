const express = require('express');
const collectionUfs = require('./data/ufs');

const app = express();

app.get('/ufs', (req, res) => {
    res.json(collectionUfs.colecaoUf);
});

app.listen(8080, () => {
    const data = new Date();
    console.log(`Server started at ${data}`);
});