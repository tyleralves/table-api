'use strict';
module.exports = function(sequelize, DataTypes) {
  var Table = sequelize.define('Table', {
    location: {type: DataTypes.STRING, allowNull: false},
    seats: {type: DataTypes.INTEGER, allowNull: false},
    startTime: {type: DataTypes.INTEGER, allowNull: false},
    endTime: {type: DataTypes.INTEGER, allowNull: false}
  }, {
    classMethods: {
      associate: function(models) {
        Table.belongsTo(models.Restaurant, {
          foreignKey: 'restaurantId',
          onDelete: 'CASCADE',
        });
        Table.hasMany(models.Reservation, {
          foreignKey: 'tableId',
          as: 'reservations'
        });
      }
    }
  });
  return Table;
};