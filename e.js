const Klaviyo = require('node-klaviyo');

const KlaviyoClient = new Klaviyo({
    //publicToken: 'myPublicToken',
    privateToken: 'pk_edf547ece3eba4755828f16278b0345e3f'
});

// Gets list details by list ID.
// Get all of the emails in a given list or segment.
KlaviyoClient.lists.getAllMembers({
    groupId: 'RWWmx9'
    //marker: 'myMarkerFromPreviousResponse'
}).then((res)=>{
    let a = res.records
    let num = a.length
    console.log(num)
})