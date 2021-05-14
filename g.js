const fetch = require('node-fetch');

const url = 'https://a.klaviyo.com/api/v2/group/RaNrw2/members?api_key=pk_edf547ece3eba4755828f16278b0345e3f';
const options = {
  method: 'POST',
  headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
  body: JSON.stringify({
    profiles: [{"id": "600739b44fa71b69d3d65803",
    "firstName": "Gianna",
    "lastName": "Taylor",
    "email": "gianna.aldridge26@gmail.com"}]
  })
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));