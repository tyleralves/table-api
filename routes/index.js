const restaurantsController = require('../controllers').restaurant;
const tablesController = require('../controllers').table;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  // Restaurants

  app
    .route('/api/restaurants')
    .post(restaurantsController.create);

  app
    .route('/api/restaurants/list')
    .get(restaurantsController.list);

  app
    .route('/api/restaurants/:restaurantId')
    .get(restaurantsController.show);

  app
    .route('/api/restaurants/:restaurantId/tables')
    .get(tablesController.show)
    .post(tablesController.create);


};