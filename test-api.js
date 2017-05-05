const request = require('request');

// Create Restaurant
// request.post({
//     url: 'http://localhost:8000/api/restaurants',
//     form: {name: "Test Kitchen", phone: 5555555555, address: "123 1st Street, Sacramento, CA 95816"}
//   },
//   function (error, response, body) {
//     if(response.statusCode == 201){
//       console.log(response.body);
//     } else {
//       console.log('error: '+ response.statusCode);
//       console.log(body);
//     }
//   }
// );


// Create Table
// request.post({
//     url: 'http://localhost:8000/api/restaurants/1/tables',
//     form: {
//       seats: 4,
//       startTime: 10,
//       endTime: 6
//     }
//   },
//   function (error, response, body) {
//     if(response.statusCode == 201){
//       console.log(response.body);
//     } else {
//       console.log('error: '+ response.statusCode);
//       console.log(body);
//     }
//   }
// );

// request.get('http://localhost:8000/api/restaurants',
//   function (error, response, body) {
//     if(response.statusCode == 201){
//       console.log(response.body);
//     } else {
//       console.log('error: '+ response.statusCode);
//       console.log(body);
//     }
//   }
// )

// Create User
// request.post({
//     url: 'http://localhost:8000/api/users',
//     form: {name: "Tyler Alves", phone: 5555555555, email: "test1@email.com"}
//   },
//   function (error, response, body) {
//     if(response.statusCode == 201){
//       console.log(response.body);
//     } else {
//       console.log('error: '+ response.statusCode);
//       console.log(body);
//     }
//   }
// );

// Create Reservation by User
// request.post({
//     url: 'http://localhost:8000/api/users/2/reservations',
//     form: {
//       timeSlot: 7,
//       numberCustomers: 4,
//       restaurantId: 1,
//       tableId: 1,
//     }
//   },
//   function (error, response, body) {
//     if(response.statusCode == 201){
//       console.log(response.body);
//     } else {
//       console.log('error: '+ response.statusCode);
//       console.log(body);
//     }
//   }
// );

// Create Reservation by Restaurant
// request.post({
//     url: 'http://localhost:8000/api/restaurants/1/reservations',
//     form: {
//       timeSlot: 7,
//       numberCustomers: 4,
//       userId: 2,
//       tableId: 1,
//     }
//   },
//   function (error, response, body) {
//     if(response.statusCode == 201){
//       console.log(response.body);
//     } else {
//       console.log('error: '+ response.statusCode);
//       console.log(body);
//     }
//   }
// );
