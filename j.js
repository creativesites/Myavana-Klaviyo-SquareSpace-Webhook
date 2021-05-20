const a = require('./monthlyOrders.json')
const jsonfile = require('jsonfile')
let b = a.length
console.log(b)

function getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()];
}

const arr1 = getUniqueListBy(a, "customerEmail");
let c = arr1.length
console.log(c)
const file = `./uniqueMonthlyOrders.json`
    jsonfile.writeFile(file, arr1)
    .then(res => {
        console.log('Write complete')
    })
    .catch(error => console.error(error))