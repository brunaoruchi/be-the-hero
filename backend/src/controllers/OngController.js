const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    async create(request, response){
        //desestruturar {atributos}
        const { name, email, whatsapp, city, uf } = request.body;
        //gera valores aleatórios na id
        const id = crypto.randomBytes(4).toString('HEX');
        //conexão com banco de dados
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        return response.json({ id });
    }
};