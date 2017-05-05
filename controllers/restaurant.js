const Restaurant = require('../models').Restaurant;
const Table = require('../models').Table;

module.exports = {
  create(req, res) {
    return Restaurant
      .create({
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address
      })
      .then(restaurant => res.status(201).send(restaurant))
      .catch(error => res.status(400).send(error));
  },
  show(req, res) {
    return Restaurant
      .find({id: req.param.restaurantId})
        .then(restaurants => res.status(201).send(restaurants))
        .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Restaurant
      .findAll({
        include: [{
          model: Table,
          as: 'tables',
        }],
      })
      .then(restaurants => res.status(201).send(restaurants))
      .catch(error => res.status(400).send(error));
  }
};