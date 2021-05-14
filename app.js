const express = require("express")
const bodyParser = require("body-parser")
const axios = require('axios')
const SyncPromise = require('sync-promise');
const Klaviyo = require('node-klaviyo');

const KlaviyoClient = new Klaviyo({
    //publicToken: 'myPublicToken',
    privateToken: 'pk_edf547ece3eba4755828f16278b0345e3f'
});
const app = express()
const PORT = 9000
app.use(bodyParser.json())

app.post("/a", async(req, res) => {

})

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))