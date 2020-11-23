const clientPreference = (sequelize, DataTypes) => {
  const ClientPreference = sequelize.define('clientPreference', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    size: DataTypes.INTEGER,
    color: DataTypes.INTEGER,
    area: DataTypes.INTEGER,
    socialReason: DataTypes.INTEGER,
  });

  ClientPreference.associate = function associate(models) {
    //   //   Client.belongsToMany(models.company, {
    //   //     through: 'clientsCompanies',
    //   //   });
    //   //   Client.hasMany(models.salesHistory);
    ClientPreference.belongsTo(models.client);
    //   //   Client.hasMany(models.quotation);
    //   //   Client.belongsToMany(models.property, {
    //   //     through: {
    //   //       model: models.clientProperty,
    //   //     },
    //   //     foreignKey: 'clientId',
    //   });
  };

  return ClientPreference;
};

module.exports = clientPreference;
