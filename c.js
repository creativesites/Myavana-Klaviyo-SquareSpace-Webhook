var axios = require('axios');
const jsonfile = require('jsonfile')
const schedule = require('node-schedule');
var yesterday = new Date((new Date()).valueOf() - 1000*60*60*24);
let y = yesterday.toISOString()
let today = new Date()
let t = today.toISOString()
const Klaviyo = require('node-klaviyo');

//API Configs
const KlaviyoClient = new Klaviyo({
    //publicToken: 'myPublicToken',
    privateToken: 'pk_edf547ece3eba4755828f16278b0345e3f'
});

var config = {
  method: 'get',
  url: `https://api.squarespace.com/1.0/commerce/orders?modifiedAfter=${y}&modifiedBefore=${t}`,
  //url: `https://api.squarespace.com/1.0/commerce/orders`,
  headers: { 
    'Authorization': 'Bearer 96549be3-65c0-4236-a0df-9016ee52ddf9'
  }
};

//Temporary array for Klaviyo
let gg = []
//sort returned objects and create new array for Klaviyo
async function sortObjects(arr){
    arr.map((b)=>{
        let j = {}
        let c = b.customerEmail
        let d = b.billingAddress.firstName
        let e = b.billingAddress.lastName
        let h = b.id
        j.id = h
        j.firstName = d
        j.lastName = e
        j.email = c
        let f = b.lineItems[0].productName
        if(f == 'MYAVANA Hair Nirvana Membership Club'){
            j.isMonthlyCustomer = true
            j.isCustomer = true
            gg.push(j)
        }else{
            j.isCustomer = true
            gg.push(j)
        }
        
    })
}

//schedule config
const rule = new schedule.RecurrenceRule();
rule.hour = 6;
rule.minute = 0;
//schedule once daily 
const job = schedule.scheduleJob(rule, function(){
  console.log('Checking today orders!');
  axios(config)
.then(function (response) {
  let aa = response.data
  let ab = aa.result
  if(ab.length === 0){
    console.log('no new orders today')
  }else{
    sortObjects(ab).then(()=>{
      KlaviyoClient.lists.addSubscribersToList({
        listId: 'RWWmx9',
        "profiles": gg
      }).then((res)=>{
        console.log(res)
      })
      
    })
  }
  
})
.catch(function (error) {
  console.log(error);
});

});



