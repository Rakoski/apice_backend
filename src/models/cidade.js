module.exports = (sequelize, DataTypes) => {
    const Cidade = sequelize.define("cidade",
        {
            id_cidade: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
        },
        {
        cidade_nome: DataTypes.STRING,
        sigla_uf: DataTypes.STRING(3),
    });

    return Cidade;
};
