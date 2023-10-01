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

    async getPessoas() {
        try {
            const pessoas = await db.pessoa.findAll();
            return pessoas;
        } catch (error) {
            throw error;
        }
    }

    async getPessoaById(id) {
        try {
            const pessoa = await db.pessoa.findByPk(id);
            return pessoa;
        } catch (error) {
            throw error;
        }
    }

    async updatePessoa(id, updatedPessoaData) {
        try {
            const updatedPessoa = await db.pessoa.update(updatedPessoaData, {
                where: { id },
                returning: true,
            });
            if (updatedPessoa[0] === 0) {
                return null; // No pessoa was updated
            }
            return updatedPessoa[1][0];
        } catch (error) {
            throw error;
        }
    }

    async deletePessoa(id) {
        try {
            const deletedPessoaCount = await db.pessoa.destroy({
                where: { id },
            });
            if (deletedPessoaCount === 0) {
                return null;
            }
            return true;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new PessoaService();
