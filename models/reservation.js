'use strict';
module.exports = function(sequelize, DataTypes) {
  var Reservation = sequelize.define('Reservation', {
    timeSlot: DataTypes.INTEGER,
    numberCustomers: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Reservation.belongsTo(models.User, {
          foreignKey: 'userId',
          onDelete: 'CASCADE'
        });
        Reservation.belongsTo(models.User, {
          foreignKey: 'userId',
          onDelete: 'CASCADE'
        });
        Reservation.belongsTo(models.Table, {
          foreignKey: 'tableId',
          onDelete: 'CASCADE'
        });
        Reservation.belongsTo(models.Restaurant, {
          foreignKey: 'restaurantId',
          onDelete: 'CASCADE'
        });
      }
    }
  });
  return Reservation;
};