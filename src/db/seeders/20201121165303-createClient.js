module.exports = {
  up: (queryInterface) => {
    return queryInterface.sequelize.transaction((transaction) => {
      return queryInterface.bulkInsert(
        'clients',
        [
          {
            name: 'darius',
            email: 'test@gmail.com',
            password:
              '$2a$10$GeBEXZ8jTPJ3Zv3a20.xIO1Pg2eqBpG/9ufoSnz/qwtObMIgr.DE.',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        { transaction },
      );
    });
  },

  down: () => {},
};
