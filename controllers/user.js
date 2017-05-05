const User = require('../models').User;
const Reservation = require('../models').Reservation;

module.exports = {
  create(req, res) {
    return User
      .create({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
  show(req, res) {
    return User
      .findById(req.params.userId, {
        include: {
          model: Reservation,
          as: 'reservations'
        }
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return User
      .findAll()
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  }
};