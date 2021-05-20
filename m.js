const qs = require('qs');
const fs = require('fs');
const axios = require('axios');

const consumerKey = `EV9mafHNBOUomIhGjbaL6XvOMOWvIhHj`;
const consumerSecret = `Zd/RV/qzkYST/oYZ5EcwQ1PJckJnV11HTFBE6FfhTeY=`;
const authHeader = Buffer.from(`${consumerKey}:${consumerSecret}`, `binary`).toString(`base64`);
const authEndpoint = `https://api.squarespace.com/1.0/webhook_subscriptions`;


function writeToFile(data, file, flag) {
    if (flag === null) flag = `a`;
    fs.writeFile(file, data, {flag: flag}, (err) => {
        if (err) {
            console.error(`Error in writing to ${file}: ${err}`);
        }
    });
}

function refreshAuthorizationToken(token) {

    return axios({
        url: authEndpoint,
        method: 'post',
        headers: {
            'Authorization': `Basic ${authHeader}`,
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36',
        },
        data: qs.stringify({
            redirect_uri: 'oob',
            grant_type: 'refresh_token',
            refresh_token: token
        }),
        timeout: 1000,
        }).catch((error) => {
            console.log(`Some kind of horrible error in refreshAuthorizationToken: ${error}`);
    });

}

async function reload() {
    const returnVal = await refreshAuthorizationToken(credentials.refresh_token); 
    if (returnVal) {
        if (returnVal.data && returnVal.data.access_token) {
            writeToFile(JSON.stringify(returnVal.data), authFile, 'w');
        }
    }
}

reload();