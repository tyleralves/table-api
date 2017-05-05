'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'Tables',
      'tableId',
      {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Restaurants',
          key: 'id',
          as: 'tableId'
        }
      }
    );

    queryInterface.changeColumn(
      'Restaurants',
      'name',
      {
        allowNull: false,
        type: Sequelize.STRING
      }
    );

    queryInterface.changeColumn(
      'Tables',
      'seats',
      {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    );

    queryInterface.changeColumn(
      'Tables',
      'startTime',
      {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    );

    queryInterface.changeColumn(
      'Tables',
      'endTime',
      {
        allowNull: false,
        type: Sequelize.INTEGER
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
