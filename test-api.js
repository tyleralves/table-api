const request = require('request');

request.post({
    url: 'http://localhost:8000/api/restaurants',
    form: {name: 'foo'}
  },
  function (error, response, body) {
    if(response.statusCode == 201){
      console.log('Success');
    } else {
      console.log('error: '+ response.statusCode);
      console.log(body);
    }
  }
)
