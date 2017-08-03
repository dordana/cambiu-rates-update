//include libraries
const apigClientFactory = require('aws-api-gateway-client');
const tabletojson = require('tabletojson');

//Global variables
const url = 'http://bestexchange.co.uk/?q=exchange-rates';

//Convert Html tables to Json object
tabletojson.convertUrl(url, function(tablesAsJson) {
    var exchangeJson = tablesAsJson[0];
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

    var apigClient = apigClientFactory.default.newClient({
        accessKey: 'AKIAIY6K5IKEXG7EGC6A',
        secretKey: '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',
        invokeUrl: 'https://cz471val2d.execute-api.us-west-2.amazonaws.com'
    });
    
    var pathTemplate = '/staging/rates';
    var method = 'POST';

    for (var i = 0; i < Object.keys(jsonOutput).length; i++) {
        
        var body = {
                    currency: jsonOutput[i].currency,
                    chain: 'Debenhams',
                    buy: parseFloat(jsonOutput[i].buy),
                    sell: parseFloat(jsonOutput[i].sell)
                };
    apigClient.invokeApi({city: 'London', country: 'UK'}, pathTemplate, method, {}, body)
        .then(function (result) {
            console.log(JSON.stringify(result.data));
        }).catch(function (result) {
            console.log(result);
        });
    }
});




