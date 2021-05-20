const a = require('./monthlyOrders.json')
const jsonfile = require('jsonfile')
let gg = []
async function sortObjects(){
    a.map((b)=>{
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

sortObjects().then(()=>{
    const file = `./monthlyOrders22.json`
    jsonfile.writeFile(file, gg)
    .then(res => {
        console.log('Write complete')
    })
    .catch(error => console.error(error))
})