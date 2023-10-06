const request = require('request');
request('https://raw.githubusercontent.com/nrstirzaker/MockDataServer/main/db.json', function (error, response, body) {
    if (!error && response.statusCode === 200) {
        const importedJSON = JSON.parse(body);
        console.log(importedJSON);
    }
})