//include libraries
const apigClientFactory = require('aws-api-gateway-client');
const tabletojson = require('tabletojson');
const Promise = require('promise');
//Global variables

const url = 'http://www.netdania.com/quotes/forex-sterling';



//Convert Html tables to Json object
tabletojson.convertUrl(url, function(tablesAsJson) {
    var exchangeJson = tablesAsJson[9];
    var jsonOutput = {};
    var j = 0;
    exchangeJson.forEach(function(rate)
    {
        jsonOutput[j++] =
            {
                name: 'No name',
                buy: rate["Ask_15"],
                sell: rate["Bid_15"],
                currency: rate["Name_15"].substring(4)
            };
    })
    console.log(jsonOutput);
});




