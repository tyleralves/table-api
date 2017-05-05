'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    // Change user phone to string type
    queryInterface.changeColumn(
      'Users',
      'phone',
      {
        type: Sequelize.STRING
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
