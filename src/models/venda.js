module.exports = (sequelize, DataTypes) => {
    const Venda = sequelize.define(
        "venda",
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

    Venda.belongsTo(sequelize.models.Pessoa, { foreignKey: "pessoa_id" });

    return Venda;
};
