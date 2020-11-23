const client = (sequelize, DataTypes) => {
  const Client = sequelize.define('client', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    identityDocument: DataTypes.STRING,
    documentType: DataTypes.STRING,
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  });

  Client.associate = function associate(models) {
    Client.hasMany(models.auth);
    Client.hasMany(models.pet);
    Client.hasOne(models.clientPreference);
    //   Client.belongsToMany(models.company, {
    //     through: 'clientsCompanies',
    //   });
    //   Client.hasMany(models.salesHistory);
    //   Client.belongsToMany(models.tower, {
    //     through: 'towersClients',
    //   });
    //   Client.hasMany(models.quotation);
    //   Client.belongsToMany(models.property, {
    //     through: {
    //       model: models.clientProperty,
    //     },
    //     foreignKey: 'clientId',
    //   });
  };

  return Client;
};

module.exports = client;
