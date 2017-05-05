'use strict';

const Reservation = require('./reservation');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Reservation, {
          foreignKey: 'userId',
          as: 'reservations'
        });
        User.belongsTo(models.Reservation, {
          foreignKey: 'reservationId',
          onDelete: 'CASCADE'
        });
      }
    }
  });
  return User;
};