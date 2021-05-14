var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.squarespace.com/1.0/profiles/?isCustomer,true',
  headers: { 
    'Authorization': 'Bearer 96549be3-65c0-4236-a0df-9016ee52ddf9'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
