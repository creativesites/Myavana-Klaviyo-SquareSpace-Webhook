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

const auth = await getAuthorizationCode(); 
//96549be3-65c0-4236-a0df-9016ee52ddf9
axios({
    url: "https://api.squarespace.com/1.0/webhook_subscriptions",
    method: "POST",
    headers: {
        auth: {
            username: 'EV9mafHNBOUomIhGjbaL6XvOMOWvIhHj',
            password: 'Zd/RV/qzkYST/oYZ5EcwQ1PJckJnV11HTFBE6FfhTeY='
          },
        //"Authorization": "Bearer 96549be3-65c0-4236-a0df-9016ee52ddf9",
        "User-Agent": "axios/0.21.1",
        "Content-Type": "application/json"
    },
    
    data: {
        "endpointUrl": "https://0502ae6e2126.ngrok.io/a",
        "topics": ["order.create", "order.update"]
    }

}).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})

/* axios({
    url: "https://api.squarespace.com/1.0/webhook_subscriptions",
    method: "POST",
    headers: {
        "Authorization": "e1d0c30f-4fda-481a-9da1-4d53ddc7d751",
        "User-Agent": "axios/0.21.1",
        "Content-Type": "application/json"
    },
    data: {
        "endpointUrl": "https://mywebhook.com/a",
        "topics": ["order.create"]
    }

}).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
}) */