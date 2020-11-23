const pet = (sequelize, DataTypes) => {
  const Pet = sequelize.define('pet', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    race: DataTypes.STRING,
    name: DataTypes.STRING,
    age: DataTypes.STRING,
    size: DataTypes.INTEGER,
    color: DataTypes.INTEGER,
    area: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    path: DataTypes.STRING,
  });

  Pet.associate = function associate(models) {
    // Client.belongsToMany(models.company, {
    //   through: 'clientsCompanies',
    // });
    // Pet.hasMany(models.salesHistory);
    Pet.belongsToMany(models.client, {
      through: 'petsClients',
    });
  };

  return Pet;
};

module.exports = pet;
