//Global vars
const GBPlist = ['GBP/GBP','GBP','British Pound'];
const USDlist = ['US Dollar', 'USD', 'GBP/USD','Dollars - USA'];
const ILSlist = ['ILS','New Israeli Sheqel','GBP/ILS','Sheqel - Israel'];
const EURlist = ['EUR', 'GBP/EUR','Euro','EURO','Euro - Europe'];
const AUDlist = ['AUD','Australian Dollar','GBP/AUD','Dollars - Australia'];
const CADlist = ['CAD', 'GBP/CAD', 'Canadian Dollar','Dollars - Canada'];
const JPYlist = ['JPY', 'GBP/JPY','Japanese Yen','Yen - Japan'];
const CNYlist = ['CNY', 'Chinese Yuan Renminbi','GBP/CNY','Yuan - China'];
const HKDlist = ['HKD', 'GBP/HKD','Hong Kong Dollar','Dollars - Hongkong'];
const NOKlist = ['NOK', 'GBP/NOK','Norwegian Krone','Kroner - Norway'];
const currenciesList = {0:'GBP',1:'EUR',2:'USD',3:'AUD',4:'CAD',5:'JPY',6:'CNY',7:'HKD',8:'ILS',9:'NOK'};
const acc = 'AC30f9cba26999974ebfc6a3bac2cf82b7';
const id = '03365315d1ca59368bc7b3b633bb801d';
const client = require("twilio")(acc,id);
const fs = require("fs");
var timestamp = require('time-stamp');
///report vars
var Report =
{
    reportList: [],
    numberOfSuccess: 0,
    numberOfFailed: 0
}

//check in string value is float
function isFloat(val) {
    var floatRegex = /^-?\d+(?:[.,]\d*?)?$/;
    if (!floatRegex.test(val))
        return false;

    val = parseFloat(val);
    if (isNaN(val))
        return false;
    return true;
}

//convert the full name to iso name
function isoFix(currencyName) {
    if(GBPlist.indexOf(currencyName.incl) > -1)
    {
        return'GBP';
    }
    if(USDlist.indexOf(currencyName) > -1)
    {
        return'USD';
    }
    if(ILSlist.indexOf(currencyName) > -1)
    {
        return'ILS';
    }
    if(EURlist.indexOf(currencyName) > -1)
    {
        return'EUR';
    }
    if(AUDlist.indexOf(currencyName) > -1)
    {
        return'AUD';
    }
    if(CADlist.indexOf(currencyName) > -1)
    {
        return'CAD';
    }
    if(JPYlist.indexOf(currencyName) > -1)
    {
        return'JPY';
    }
    if(CNYlist.indexOf(currencyName) > -1)
    {
        return'CNY';
    }
    if(HKDlist.indexOf(currencyName) > -1)
    {
        return'HKD';
    }
    if(NOKlist.indexOf(currencyName) > -1)
    {
        return'NOK';
    }
    //not exist in currency list
    return -2;
}

//Scraping function
exports.Scraping = function scraping(url)
{
    var sync = require('synchronize');
    //include libraries
    const apigClientFactory = require('aws-api-gateway-client'),
          tabletojson = require('tabletojson'),
          Q = require("q");
         
    //Convert Html tables to Json object
    tabletojson.convertUrl(url.address, function(tablesAsJson)
    {
        var exchangeJson = tablesAsJson[url.numberOfTable];
        
        var jsonOutput = {};
        var j = 0;
        exchangeJson.forEach(function(rate)
        { 
            if(isFloat(rate[url.parameters.buy]) && isFloat(rate[url.parameters.sell]))
            {
                var isoCurrency = isoFix(rate[url.parameters.currency]);
                if (isoCurrency !== -2)
                {
                    jsonOutput[j++] =
                        {
                            id: url.exchangeId,
                            buy: rate[url.parameters.buy],
                            sell: rate[url.parameters.sell],
                            currency: isoCurrency
                        };
                    }
            }
        })

            
            var apigClient = apigClientFactory.default.newClient({
                accessKey: 'AKIAIY6K5IKEXG7EGC6A',
                secretKey: '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',
                invokeUrl: 'https://cz471val2d.execute-api.us-west-2.amazonaws.com'
            });
             
            var pathTemplate = '/staging/rates';
            var method = 'POST';
            
            for (var i = 0; i < Object.keys(jsonOutput).length; i++)
            {
            var body = {
                                currency: jsonOutput[i].currency,
                                chain: 'Debenhams',
                                buy: parseFloat(jsonOutput[i].buy),
                                sell: parseFloat(jsonOutput[i].sell)
                            };
            apigClient.invokeApi({}, pathTemplate, method, {}, body)
            .then(function (result) {
                Report.numberOfSuccess++;
                console.log(JSON.stringify(result.data));
            }).catch(function (result) {
                Report.numberOfFailed++;
                //Report.reportList.push([jsonOutput[i].id,jsonOutput[i].currency]);
            });

            }
        /////finally
        console.log(Report);
    })
}

//https://blog.risingstack.com/node-hero-async-programming-in-node-js/
// ///sending a report
// console.log("Sending a message to +972549325932");
// client.messages.create
// ({ 
//     to: "+972549325932", 
//     from: "+17868863180", 
//     body: '\r\n['+timestamp('DD/MM/YYYY HH:mm:ss')+']\r\n *Update report*\r\n' + 'Number of success: ' + numberOfSuccess  + '\r\nNumber of failed: ' + numberOfFailed
// });
// if (numberOfFailed > 0)
// {
//     fs.writeFile('Report.txt', timestamp('DD/MM/YYYY HH:mm:ss') + reportList, function (err) {
//     if (err) 
//         throw err;
//     console.log('Report created');
//     });
// }