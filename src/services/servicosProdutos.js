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
const Produto = require('../models/produto')(sequelize, DataTypes);

const produtosService = {
    getProdutos: async () => {
        try {
            return await Produto.findAll();
        } catch (error) {
            throw error;
        }
    },

    getProdutoById: async (id) => {
        try {
            const produto = await Produto.findOne({ where: { id_produto: id } });
            return produto;
        } catch (error) {
            throw error;
        }
    },

    createProduto: async (nome_produto, valor_produto) => {
        try {
            return await Produto.create({
                nome_produto,
                valor_produto,
            });
        } catch (error) {
            throw error;
        }
    },

    updateProduto: async (id, nome_produto, valor_produto) => {
        try {
            const [updatedRowsCount] = await Produto.update(
                { nome_produto, valor_produto },
                { where: { id_produto: id } }
            );

            if (updatedRowsCount === 1) {
                return { message: 'Produto atualizado com sucesso' };
            }
        } catch (error) {
            throw error;
        }
    },

    deleteProduto: async (id) => {
        try {
            const deletedRowCount = await Produto.destroy({ where: { id_produto: id } });

            if (deletedRowCount === 1) {
                return { message: 'Produto deletado com sucesso' };
            }
        } catch (error) {
            throw error;
        }
    },

};

module.exports = produtosService;