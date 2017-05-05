const reservationsController = require('../controllers').reservation;
const restaurantsController = require('../controllers').restaurant;
const tablesController = require('../controllers').table;
const usersController = require('../controllers').user;

module.exports = (app) => {

  // Restaurants
  app
    .route('/api/restaurants')
    .get(restaurantsController.list)
    .post(restaurantsController.create);

  app
    .route('/api/restaurants/:restaurantId')
    .get(restaurantsController.show);

  app
    .route('/api/restaurants/:restaurantId/tables')
    .get(tablesController.show)
    .post(tablesController.create);

  app
    .route('/api/restaurants/:restaurantId/reservations')
    .get(reservationsController.listByRestaurant)
    .post(reservationsController.createByRestaurant);

  // Users
  app
    .route('/api/users')
    .get(usersController.list)
    .post(usersController.create);

  app
    .route('/api/users/:userId')
    .get(usersController.show);

  app
    .route('/api/users/:userId/reservations')
    .get(reservationsController.listByUser)
    .post(reservationsController.createByUser);

};


