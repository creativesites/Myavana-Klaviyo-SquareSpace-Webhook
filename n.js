const axios = require('axios')
const oauth = require('axios-oauth-client');
const getAuthorizationCode = oauth.client(axios.create(), {
  url: 'https://api.squarespace.com/1.0/webhook_subscriptions',
  grant_type: 'authorization_code',
  client_id: 'EV9mafHNBOUomIhGjbaL6XvOMOWvIhHj',
  client_secret: 'Zd/RV/qzkYST/oYZ5EcwQ1PJckJnV11HTFBE6FfhTeY=',
  //redirect_uri: '...',
  //code: '...',
  //scope: 'baz',
});

const auth =  getAuthorizationCode().then((res)=>{
    console.log(res)
})