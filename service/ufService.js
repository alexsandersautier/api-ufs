const collectionUfs = require('../data/ufs');
const getData = () => collectionUfs.colecaoUf;

const validateUf = (id) => {
    return !isNaN(id);
}

exports.getData = getData;
exports.validateUf = validateUf;