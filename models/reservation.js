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
        Reservation.hasOne(models.User, {
          foreignKey: 'reservationId',
          as: 'user'
        });
        Reservation.hasOne(models.Table, {
          foreignKey: 'reservationId',
          as: 'table'
        });
        Reservation.hasOne(models.Restaurant, {
          foreignKey: 'reservationId',
          as: 'restaurant'
        });
      }
    }
  });
  return Reservation;
};