const pool = require('../database/index')

const produtosService = {
    getProdutos: async () => {
        try {
            const sql = "SELECT * FROM produto";
            const [rows, fields] = await pool.promise().query(sql);
            return rows;
        } catch (error) {
            throw error;
        }
    },

    getProdutoById: async (id) => {
        try {
            const sql = "SELECT * FROM produto WHERE id_produto = ?";
            const [rows, fields] = await pool.promise().query(sql, [id]);
            return rows;
        } catch (error) {
            throw error;
        }
    },

    createProduto: async (nome_produto, valor_produto) => {
        try {
            const sql = "INSERT INTO produto (nome_produto, valor_produto) VALUES (?, ?)";
            const [rows, fields] = await pool.promise().query(sql, [nome_produto, valor_produto]);
            return rows;
        } catch (error) {
            throw error;
        }
    },

    updateProduto: async (id, nome_produto, valor_produto) => {
        try {
            const sql = "UPDATE produto SET nome_produto = ?, valor_produto = ? WHERE id_produto = ?";
            const [rows, fields] = await pool.promise().query(sql, [nome_produto, valor_produto, id]);
            return rows;
        } catch (error) {
            throw error;
        }
    },

    deleteProduto: async (id) => {
        try {
            const sql = "DELETE FROM produto WHERE id_produto = ?";
            const [rows, fields] = await pool.promise().query(sql, [id]);
            return rows;
        } catch (error) {
            throw error;
        }
    },
};

module.exports = produtosService;

module.exports = produtosService;