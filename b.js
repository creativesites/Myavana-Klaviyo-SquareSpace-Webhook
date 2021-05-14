const axios = require('axios')
//96549be3-65c0-4236-a0df-9016ee52ddf9
axios({
    url: "https://api.squarespace.com/1.0/profiles/?isCustomer,true",
    method: "GET",
    headers: {
        "Authorization": "Klavio296549be3-65c0-4236-a0df-9016ee52ddf9",
        "User-Agent": "axios/0.21.1"
    }
    
}).then((res)=>{
    console.log(res)
}).catch((err)=>{
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