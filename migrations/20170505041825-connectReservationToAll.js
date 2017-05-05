'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    // Add reservationId to table, restaurant, user
    queryInterface.addColumn(
      'Tables',
      'reservationId',
      {
        onDelete: 'CASCADE',
        type: Sequelize.INTEGER,
        references: {
          model: 'Reservations',
          key: 'id',
          as: 'reservationId'
        }
      }
    );
    queryInterface.addColumn(
      'Restaurants',
      'reservationId',
      {
        onDelete: 'CASCADE',
        type: Sequelize.INTEGER,
        references: {
          model: 'Reservations',
          key: 'id',
          as: 'reservationId'
        }
      }
    );
    queryInterface.addColumn(
      'Users',
      'reservationId',
      {
        onDelete: 'CASCADE',
        type: Sequelize.INTEGER,
        references: {
          model: 'Reservations',
          key: 'id',
          as: 'reservationId'
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
