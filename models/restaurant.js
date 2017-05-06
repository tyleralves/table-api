'use strict';
module.exports = function(sequelize, DataTypes) {
  var Restaurant = sequelize.define('Restaurant', {
    name: {type: DataTypes.STRING, allowNull: false},
    phone: DataTypes.INTEGER,
    address: DataTypes.STRING,
    photo: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Restaurant.hasMany(models.Table, {
          foreignKey: 'restaurantId',
          as: 'tables',
        });
        Restaurant.hasMany(models.Reservation, {
          foreignKey: 'restaurantId',
          as: 'reservations'
        });
      }
    }
  });
  return Restaurant;
};