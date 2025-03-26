const collectionUfs = require('../data/ufs');
const findAll = () => collectionUfs.colecaoUf;
const findById = (id) => findAll().find(uf => uf.id === id);
const findByName = (name) => findAll().filter(uf => uf.nome.toLocaleLowerCase().includes(name.toLocaleLowerCase()));

const validateUf = (id) => {
    return !isNaN(id);
}

exports.findAll = findAll;
exports.findById = findById;
exports.findByName = findByName;
exports.validateUf = validateUf;