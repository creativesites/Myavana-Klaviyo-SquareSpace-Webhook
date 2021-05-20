const a = require('./orders.json')
const aa = require('./orders2.json')
let b = []
const jsonfile = require('jsonfile')

let a1 = a.result
let a2 = aa.result
let a3 = a1.concat(a2)
async function bb(){
    await a3.map((g)=>{
        let c = g.lineItems[0].productName
        if(c == 'MYAVANA Hair Nirvana Membership Club'){
            b.push(g)
        }
    })
}

bb().then(()=>{
    const file = `./monthlyOrders.json`
    jsonfile.writeFile(file, b)
    .then(res => {
        console.log('Write complete')
    })
    .catch(error => console.error(error))
})