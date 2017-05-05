'use strict';
module.exports = function(sequelize, DataTypes) {
  var Restaurant = sequelize.define('Restaurant', {
    name: {type: DataTypes.STRING, allowNull: false},
    phone: DataTypes.INTEGER,
    address: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Restaurant.hasMany(models.Table, {
          foreignKey: 'restaurantId',
          as: 'tables',
        });
        Restaurant.belongsTo(models.Reservation, {
          foreignKey: 'reservationId',
          onDelete: 'CASCADE'
        });
      }
    }
  });
  return Restaurant;
};