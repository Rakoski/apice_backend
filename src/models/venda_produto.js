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

    VendaProduto.belongsTo(sequelize.models.Venda, { foreignKey: "venda_id" });
    VendaProduto.belongsTo(sequelize.models.Produto, { foreignKey: "produto_id" });

    return VendaProduto;
};