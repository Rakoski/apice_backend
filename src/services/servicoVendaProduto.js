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
const VendaProduto = require('../models/venda_produto')(sequelize, DataTypes);

const vendaProdutoServico = {
    getVendaProdutos: async () => {
        try {
            return await VendaProduto.findAll();
        } catch (error) {
            throw error;
        }
    },

    getVendaProdutoById: async (id) => {
        try {
            const VendaProduto = await VendaProduto.findOne({ where: { id_vendaproduto: id } });
            return VendaProduto;
        } catch (error) {
            throw error;
        }
    },

    createVendaProduto: async (venda_id, produto_id) => {
        try {
            return await VendaProduto.create({
                venda_id,
                produto_id
            });
        } catch (error) {
            throw error;
        }
    },

    updateVendaProduto: async (id, venda_id, produto_id) => {
        try {
            const [updatedRowsCount] = await VendaProduto.update(
                { venda_id },
                { produto_id },
                { where: { id_vendaproduto: id } }
            );

            if (updatedRowsCount === 1) {
                return { message: 'VendaProduto atualizado com sucesso' };
            }
        } catch (error) {
            throw error;
        }
    },

    deleteVendaProduto: async (id) => {
        try {
            const deletedRowCount = await VendaProduto.destroy({ where: { id_vendaproduto: id } });

            if (deletedRowCount === 1) {
                return { message: 'VendaProduto deletado com sucesso' };
            }
        } catch (error) {
            throw error;
        }
    },



};

module.exports = vendaServico;