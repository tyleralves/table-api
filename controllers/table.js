const Table = require('../models').Table;
const Reservation = require('../models').Reservation;

module.exports = {
  create(req, res) {
    return Table
      .create({
        seats: req.body.seats,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        location: req.body.location,
        photo: req.body.photo,
        restaurantId: req.params.restaurantId
      })
      .then(table => res.status(201).send(table))
      .catch(error => res.status(400).send(error));
  },
  show(req, res) {
    return Table
      .findAll({
        include: {
          model: Reservation,
          as: 'reservations'
        }
      })
      .then(table => res.status(201).send(table))
      .catch(error => res.status(400).send(error));
  }
};