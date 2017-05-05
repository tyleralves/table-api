const Table = require('../models').Table;

module.exports = {
  create(req, res) {
    return Table
      .create({
        seats: req.body.seats,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        restaurantId: req.params.restaurantId
      })
      .then(table => res.status(201).send(table))
      .catch(error => res.status(400).send(error));
  },
  show(req, res) {
    return Table
      .findAll({})
      .then(table => res.status(201).send(table))
      .catch(error => res.status(400).send(error));
  }
};