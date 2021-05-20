var yesterday = new Date((new Date()).valueOf() - 1000*60*60*24);
console.log(yesterday.toDateString())
console.log(yesterday.toISOString())
let today = new Date()
let t = today.toISOString()
console.log(t)
const event1 = new Date('05 October 2011 14:48 UTC');
//console.log(event1.toString());
// expected output: Wed Oct 05 2011 16:48:00 GMT+0200 (CEST)
// (note: your timezone may vary)

//console.log(event1.toISOString());