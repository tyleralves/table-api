'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    // Add userId to Reservation table
    queryInterface.addColumn(
      'Reservations',
      'userId',
      {
        onDelete: 'CASCADE',
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
          as: 'userId'
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
