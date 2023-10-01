const Venda = require("./venda")
const Produto = require("./produto")

module.exports = (sequelize, DataTypes) => {
    const VendaProduto = sequelize.define(
        "VendaProduto",
        {
            id_vendaproduto: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
        },
        {
            timestamps: false,
            tableName: "venda_produto",
        }
    );

    return VendaProduto;
};