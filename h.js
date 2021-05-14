const fetch = require('node-fetch');
const axios = require('axios')
const url = 'https://a.klaviyo.com/api/v2/group/RaNrw2/members/all?api_key=pk_edf547ece3eba4755828f16278b0345e3f';
const options = {method: 'GET', headers: {Accept: 'application/json'}};

axios(url, options)
  .then((res)=>{
      let e = res.data
      let a = e.records
      let b = a.length
      console.log(b)
  })
  .catch(err => console.error('error:' + err));