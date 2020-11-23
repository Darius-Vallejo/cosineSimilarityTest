const auth = (sequelize, DataTypes) => {
  const Auth = sequelize.define('auth', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Auth.associate = (models) => {
    Auth.belongsTo(models.client, {
      onDelete: 'cascade',
    });
  };
  // Client.associate = function associate(models) {
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
  // };

  return Auth;
};

module.exports = auth;
