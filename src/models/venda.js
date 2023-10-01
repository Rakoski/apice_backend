const Pessoa = require("./pessoa")
const VendaProduto = require("./venda_produto")

module.exports = (sequelize, DataTypes) => {
    const Venda = sequelize.define(
        "Venda",
        {
            id_venda: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            valor_venda: DataTypes.DECIMAL(15, 2),
        },
        {
            timestamps: false,
            tableName: "venda",
        }
    );

    return Venda;
};