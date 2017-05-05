'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'Reservations',
      'restaurantId',
      {
        onDelete: 'CASCADE',
        type: Sequelize.INTEGER,
        references: {
          model: 'Restaurants',
          key: 'id',
          as: 'restaurantId'
        }
      }
    );
    queryInterface.addColumn(
      'Reservations',
      'tableId',
      {
        onDelete: 'CASCADE',
        type: Sequelize.INTEGER,
        references: {
          model: 'Tables',
          key: 'id',
          as: 'tableId'
        }
      }
    );
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
