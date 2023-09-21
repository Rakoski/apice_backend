module.exports = (sequelize, DataTypes) => {
    const Bairro = sequelize.define("bairro",
        {
            id_bairro: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
        },
        {
        bairro_nome: DataTypes.STRING,
    });

    return Bairro;
};
