const request = require('request');

// request.post({
//     url: 'http://localhost:8000/api/restaurants',
//     form: {name: "Arby's", phone: 5555555555, address: "123 1st Street, Sacramento, CA 95816"}
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
request.post({
    url: 'http://localhost:8000/api/restaurants/1/tables',
    form: {
      seats: 4,
      startTime: 10,
      endTime: 6
    }
  },
  function (error, response, body) {
    if(response.statusCode == 201){
      console.log(response.body);
    } else {
      console.log('error: '+ response.statusCode);
      console.log(body);
    }
  }
);

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
