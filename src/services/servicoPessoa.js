const db = require('../models');

class PessoaService {
    async createPessoa(newPessoaData) {
        try {
            const createdPessoa = await db.pessoa.create(newPessoaData);
            return createdPessoa;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new PessoaService();