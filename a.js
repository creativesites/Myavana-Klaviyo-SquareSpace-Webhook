const Klaviyo = require('node-klaviyo');
const p = require('./uniqueMonthlyOrders.json')

const KlaviyoClient = new Klaviyo({
    //publicToken: 'myPublicToken',
    privateToken: 'pk_edf547ece3eba4755828f16278b0345e3f'
});

/* KlaviyoClient.lists.getLists().then((res)=>{
    console.log(res)
}) */

KlaviyoClient.lists.addSubscribersToList({
    listId: 'RWWmx9',
    "profiles": p
}).then((res)=>{
    console.log(res)
})

