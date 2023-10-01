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
const Venda = require('../models/venda')(sequelize, DataTypes);

const vendaServico = {
    getVendas: async () => {
        try {
            return await Venda.findAll();
        } catch (error) {
            throw error;
        }
    },

    getVendaById: async (id) => {
        try {
            const venda = await Venda.findOne({ where: { id_venda: id } });
            return venda;
        } catch (error) {
            throw error;
        }
    },

    createVenda: async (pessoa_id, valor_venda) => {
        try {
            return await Venda.create({
                pessoa_id,
                valor_venda
            });
        } catch (error) {
            throw error;
        }
    },

    updateVenda: async (id, pessoa_id, valor_venda) => {
        try {
            const [updatedRowsCount] = await Venda.update(
                { valor_venda },
                { pessoa_id },
                { where: { id_venda: id } }
            );

            if (updatedRowsCount === 1) {
                return { message: 'Venda atualizado com sucesso' };
            }
        } catch (error) {
            throw error;
        }
    },

    deleteVenda: async (id) => {
        try {
            const deletedRowCount = await Venda.destroy({ where: { id_venda: id } });

            if (deletedRowCount === 1) {
                return { message: 'Venda deletado com sucesso' };
            }
        } catch (error) {
            throw error;
        }
    },



};

module.exports = vendaServico;