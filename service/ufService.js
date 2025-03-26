const collectionUfs = require('../data/ufs');
const findAll = () => collectionUfs.colecaoUf;
const findById = (id) => findAll().find(uf => uf.id === id);

const validateUf = (id) => {
    return !isNaN(id);
}

exports.findAll = findAll;
exports.findById = findById;
exports.validateUf = validateUf;