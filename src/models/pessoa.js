module.exports = (sequelize, DataTypes) => {
    const Pessoa = sequelize.define("Pessoa",
        {
            id_pessoa: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
        },
        {
        pessoa_nome: DataTypes.STRING,
        cep: DataTypes.STRING(9),
        endereco: DataTypes.STRING,
        numero: DataTypes.STRING(5),
        complemento: DataTypes.STRING,
        telefone: DataTypes.STRING(21),
        email: DataTypes.STRING,
    });

    Pessoa.belongsTo(sequelize.models.Bairro, { foreignKey: "bairro_id" });
    Pessoa.belongsTo(sequelize.models.Cidade, { foreignKey: "cidade_id" });
    Pessoa.hasMany(sequelize.models.Venda);

    return Pessoa;
};
