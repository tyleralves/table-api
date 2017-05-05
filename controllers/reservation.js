const Reservation = require('../models').Reservation;

module.exports = {
  createByRestaurant(req, res) {
    return Reservation
      .create({
        timeSlot: req.body.timeSlot,
        numberCustomers: req.body.numberCustomers,
        restaurantId: req.params.restaurantId,
        tableId: req.body.tableId,
        userId: req.body.userId
      })
      .then(reservation => res.status(201).send(reservation))
      .catch(error => res.status(400).send(error));
  },

  createByUser(req, res) {
    return Reservation
      .create({
        timeSlot: req.body.timeSlot,
        numberCustomers: req.body.numberCustomers,
        restaurantId: req.body.restaurantId,
        tableId: req.body.tableId,
        userId: req.params.userId
      })
      .then(reservation => res.status(201).send(reservation))
      .catch(error => res.status(400).send(error));
  },

  listByUser(req, res) {
    return Reservation
      .findAll({where: {userId: req.params.userId}})
      .then(reservation => res.status(201).send(reservation))
      .catch(error => res.status(400).send(error));
  },

  listByRestaurant(req, res) {
    return Reservation
      .findAll({where: {restaurantId: req.params.restaurantId}})
      .then(reservation => res.status(201).send(reservation))
      .catch(error => res.status(400).send(error));
  }
};