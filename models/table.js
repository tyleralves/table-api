'use strict';
module.exports = function(sequelize, DataTypes) {
  var Table = sequelize.define('Table', {
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
        Table.belongsTo(models.Reservation, {
          foreignKey: 'reservationId',
          onDelete: 'CASCADE'
        });
      }
    }
  });
  return Table;
};