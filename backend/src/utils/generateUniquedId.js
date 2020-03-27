const crypto = require('crypto');

module.exports = function generateUniquedId(){
    //gera valores aleatórios na id
    return crypto.randomBytes(4).toString('HEX');
}