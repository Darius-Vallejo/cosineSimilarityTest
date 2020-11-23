const pets = [
  [1, 'perrito 1', 200000, 40, 80, 1],
  [2, 'perrito 2', 100000, 50, 80, 2],
];

module.exports = {
  up: (queryInterface) => {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.sequelize.query(
        `INSERT INTO "pets" ("race", "name", "price", "size", "area", "color", "createdAt", "updatedAt") VALUES ${pets.map(
          () => '(?)',
        )}`,
        {
          replacements: pets.map((e) => [...e, new Date(), new Date()]),
        },
        { transaction },
      );
    });
  },

  down: () => {},
};
