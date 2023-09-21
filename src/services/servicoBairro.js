const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(
    process.env.DB_DBNAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
    }
);
const Bairro = require('../models/bairro')(sequelize, DataTypes);

const bairroServico = {
    getBairros: async () => {
        try {
            return await Bairro.findAll();
        } catch (error) {
            throw error;
        }
    },

    getBairroById: async (id) => {
        try {
            const bairro = await Bairro.findOne({ where: { id_produto: id } });
            return bairro;
        } catch (error) {
            throw error;
        }
    },

    createBairro: async (bairro_nome) => {
        try {
            return await Bairro.create({
                bairro_nome,
            });
        } catch (error) {
            throw error;
        }
    },

    updateProduto: async (id, bairro_nome) => {
        try {
            const [updatedRowsCount] = await Bairro.update(
                { bairro_nome },
                { where: { id_bairro: id } }
            );

            if (updatedRowsCount === 1) {
                return { message: 'Bairro atualizado com sucesso' };
            }
        } catch (error) {
            throw error;
        }
    },

    deleteBairro: async (id) => {
        try {
            const deletedRowCount = await Bairro.destroy({ where: { id_bairro: id } });

            if (deletedRowCount === 1) {
                return { message: 'Bairro deletado com sucesso' };
            }
        } catch (error) {
            throw error;
        }
    },

};

module.exports = bairroServico;
