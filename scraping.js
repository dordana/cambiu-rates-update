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

const   apigClientFactory = require('aws-api-gateway-client'),
        tabletojson = require('tabletojson'),
        client = require("twilio")(acc,id),
        fs = require("fs"),
        timestamp = require('time-stamp');
        
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
    //var sync = require('synchronize');
    //include libraries


    //Convert Html tables to Json object
    tabletojson.convertUrl(url.address, function(tablesAsJson)
    {
        var exchangeJson = tablesAsJson[url.numberOfTable];

        var jsonOutput = {};
        var j = 0;
        console.log("Start scraping => "+ url.address);
        console.log("Converting web Html to Json object");
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
           
            var objMapToArr = require('object-map-to-array');
                function runArray ()
                {
                    console.log("Updating API");
                    var promises = objMapToArr(jsonOutput,asyncFunc);
                    return Promise.all(promises);
                }
            runArray().then(function(result) {
                    new Promise(function(resolve, reject) {
                      console.log("Start creating a report");
                    // sendSMSReport();
                    // sendEmailReport();
                     resolve('ok');
                    })
                 
            })
            .catch(function(error) {
                console.log(Report);
            });
    })
}


var asyncFunc = function(item) {

    var apigClient = apigClientFactory.default.newClient({
                accessKey: 'AKIAIY6K5IKEXG7EGC6A',
                secretKey: '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',
                invokeUrl: 'https://cz471val2d.execute-api.us-west-2.amazonaws.com'
            });

            var pathTemplate = '/staging/rates';
            var method = 'POST';

            var body =
            {
                    currency: item.currency,
                    chain: 'Debenhams',
                    buy: parseFloat(item.buy),
                    sell: parseFloat(item.sell)
            };
    return new Promise(function(resolve, reject) {
        apigClient.invokeApi({}, pathTemplate, method, {}, body)
        .then(function (result) {
            console.log("Success: Updating => " + body.currency);
            Report.numberOfSuccess++;
            console.log(JSON.stringify(result.data));
            resolve('ok');
        }).catch(function (result) {
            console.log("Error: Updating => " + body.currency);
            Report.numberOfFailed++;
            Report.reportList.push([body.chain,body.currency]);
            resolve('error');
        });

    })
}
function sendSMSReport()
{
    ///sending a report
    console.log("Sending a message to +972549325932");
    // client.messages.create
    // ({
    //     to: "+972549325932",
    //     from: "+17868863180",
    //     body: ' \r\n['+timestamp('DD/MM/YYYY HH:mm:ss')+']\r\n *Update report*\r\n' + 'Number of success: ' + Report.numberOfSuccess  + '\r\nNumber of failed: ' + Report.numberOfFailed
    // });
    if (Report.numberOfFailed > 0)
    {
        fs.writeFile('Report.txt', timestamp('DD/MM/YYYY HH:mm:ss \r\n') + Report.reportList.map(function(v){ return v.join(', ') }).join('\n'), function (err) {
        if (err)
            throw err;
        console.log('Report created');
        });
    }
}
function sendEmailReport()
{

  console.log("Sending a email to dordanaa@gmail.com");
  var api_key = 'key-eef1b14f1229530c25fadbb64e12c8f6';
  var domain = 'sandbox3fc985a1f4274f558f5239547f7a9c33.mailgun.org';
  var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

  var data = {
    from: 'Cambiu - Update rates report <postmaster@sandbox3fc985a1f4274f558f5239547f7a9c33.mailgun.org>',
    to: 'dordanaa@gmail.com',
    subject: 'Cambiu - Update rates report',
    text: ' \r\n['+timestamp('DD/MM/YYYY HH:mm:ss')+']\r\n *Update report*\r\n' + 'Number of success: ' + Report.numberOfSuccess  + '\r\nNumber of failed: ' + Report.numberOfFailed

  };

  //mailgun.messages().send(data, function (error, body) {
    //console.log(body);
  //});

}
////run => source app-env
