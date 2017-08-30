//Global vars
const GBPlist = ['GBP/GBP','GBP','BritishPound',"GBPBritishPound","לירה שטרלינג (GBP)"];
const USDlist = ['USDollar', 'USD', 'GBP/USD','Dollars-USA',"USDUSDollars","US",'דולר (USD)'];
const ILSlist = ['ILS','NewIsraeliSheqel','GBP/ILS','Sheqel-Israel',"New"];
const EURlist = ['EUR', 'GBP/EUR','Euro','EURO','Euro-Europe',"EUREuro","יורו (EUR)"];
const AUDlist = ['AUD','AustralianDollar','GBP/AUD','Dollars-Australia','AUS',"דולר אוסטרלי (AUD)","AUDAustralianDollar","Australian"];
const CADlist = ['CAD', 'GBP/CAD', 'CanadianDollar','Dollars-Canada','CAN',"Canadian","דולר קנדי (CAD)"];
const JPYlist = ['JPY',"JPN", 'GBP/JPY','JapaneseYen','Yen-Japan',"JPYJapaneseYen","Japanese","יין יפני (JPY)"];
const CNYlist = ['CNY', 'ChineseYuanRenminbi','GBP/CNY',"יואן סיני (CNY)",'Yuan-China','CHN',"CNYChineseYuan(RMB)","Chinese"];
const HKDlist = ['HKD', 'GBP/HKD','HongKongDollar',"דולר הונג קונגי (HKD)",'Dollars-Hongkong','HKG',"HKDHongKongDollar","Hong"];
const NOKlist = ['NOK', 'GBP/NOK','NorwegianKrone',"כתר נוורוגי (NOK)",'Kroner-Norway',"Norwegian"];
const CZKlist = ['CZK','GBP/CZK','CzechRepublicKoruna',"כתר צ'כי"];
const LEUlist = ['LEU','GBP/LEU',"RomanianLeu","RON"];
const PLNlist = ['PLN','GBP/PLN',"PolishZloty","זלוטי פולני (PLN)"];
const CHFlist = ['CHF',"SWF",'GBP/CHF',"SwissFranc","פרנק שוויצרי (CHF)"];
const THBlist = ['THB',"THA",'GBP/THB',"ThaiBaht"];
const PHPlist = ['PHP','GBP/PHP',"PhilippinePeso"];
const currenciesList = {0:'GBP',1:'EUR',2:'USD',3:'AUD',4:'CAD',5:'JPY',6:'CNY',7:'HKD',8:'ILS',9:'NOK'};
const acc = 'AC30f9cba26999974ebfc6a3bac2cf82b7';
const id = '03365315d1ca59368bc7b3b633bb801d';

const   apigClientFactory = require('aws-api-gateway-client'),
        tabletojson = require('tabletojson'),
        client = require("twilio")(acc,id),
        timestamp = require('time-stamp'),
        Promise = require("bluebird");
        
        
        
///report vars
global.Report =
{
    failedReportList: [],
    numberOfSuccess: 0,
    numberOfFailed: 0,
    date: ""
};
var detailsPerUrl =
{
    _address: "",
    _rate: "",
    _reason: ""
};
//check in string value is float
function isFloat(val) {
    if (typeof val == 'number')
    {
        return true;
    }
    var floatRegex = /^-?\d+(?:[.,]\d*?)?$/;
    if (!floatRegex.test(val))
        return false;

    val = parseFloat(val);
    if (isNaN(val))
        return false;
    return true;
}

function checkRates(rate)
{
    if(isFloat(rate))
    {
        return rate;
    }else{
        rate = parseFloat(rate.split(" ",1)[0]);

        if(isFloat(rate))
        {
            return rate;
        }
        return rate;
    }
    
}

//convert the full name to iso name
function isoFix(currencyName) {
    if(CZKlist.indexOf(currencyName) > -1)
    {
        return'CZK';
    }
    if(LEUlist.indexOf(currencyName) > -1)
    {
        return'LEU';
    }
    if(PLNlist.indexOf(currencyName) > -1)
    {
        return'PLN';
    }
    if(CHFlist.indexOf(currencyName) > -1)
    {
        return'CHF';
    }
    if(THBlist.indexOf(currencyName) > -1)
    {
        return'THB';
    }
    if(PHPlist.indexOf(currencyName) > -1)
    {
        return'PHP';
    }
    /////
    if(GBPlist.indexOf(currencyName) > -1)
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
    //Convert Html tables to Json object
        return new Promise((resolve, reject) =>{
            tabletojson.convertUrl(url.address).then(function (tables)
            {
                    scrape(tables).then(function (data)
                    {
                        resolve(data);
                    });
            });
        });
        
        function scrape (tablesAsJson)
        {
            
            var exchangeJson = tablesAsJson[url.numberOfTable];
            console.log(exchangeJson);
            if (exchangeJson === undefined)
            {
                console.log("There is a problem to parse " + url.address);
                global.Report.failedReportList.push(url.address+"\treason => There is a problem to parse this site.");
                return null;
            }
            var jsonOutput = {};
            var j = 0;
            exchangeJson.forEach(function(rate)
            {
                if (rate[url.buy] !== undefined)
                {
                    rate[url.buy] = checkRates(rate[url.buy]);
                    rate[url.sell] = checkRates(rate[url.sell]);
                    if(isFloat(rate[url.buy]) && isFloat(rate[url.sell]))
                    {
                        rate[url.currency] = rate[url.currency].replace(/\s|\r\n|\s\r\n|\r\n\s/g,'');
                        var isoCurrency = isoFix(rate[url.currency]);
                        
                        if (isoCurrency !== -2)
                        {
                            jsonOutput[j++] =
                            {
                                address: url.address,
                                name: url.name,
                                id: url.exchangeId,
                                chain: url.chain,
                                buy: rate[url.buy],
                                sell: rate[url.sell],
                                currency: isoCurrency
                            };
                        }
                    }
                }
            })
               
                var objMapToArr = require('object-map-to-array');
                    function runArray ()
                    {
                        console.log("Updating API");
                        console.log("URL: "+ url.address);
                        console.log("Number of rows to update: "+ Object.keys(jsonOutput).length);
                        var promises = objMapToArr(jsonOutput,asyncFunc);
                        return Promise.all(promises);
                    }
                return new Promise((resolve, reject) =>{
                        runArray().then(function(result) {
                        console.log("Done with " + url.address);
                        
                        resolve(global.Report);
                        })
                    
                });
        }
}


exports.ScrapingNoTable = function ScrapingNoTable(url,data)
{
        //Convert Html tables to Json object
        var exchangeJson = data;
        
        if (exchangeJson === undefined)
        {
            console.log("There is a problem to parse " + url.address);
            global.Report.failedReportList.push(url.address+"\treason => There is a problem to parse this site.");
            return null;
        }
        var jsonOutput = {};
        var j = 0;
        
        
        exchangeJson.forEach(function(rate)
        {
            
            if (rate[url.buy] !== undefined)
            {
                rate[url.buy] = checkRates(rate[url.buy]);
                rate[url.sell] = checkRates(rate[url.sell]);
                

                if(isFloat(rate[url.buy]) && isFloat(rate[url.sell]))
                {
                    
                    var isoCurrency = isoFix(rate[url.currency].trim());
                    
                    if (isoCurrency !== -2)
                    {
                        jsonOutput[j++] =
                        {
                            address: url.address,
                            name: url.name,
                            id: url.exchangeId,
                            chain: url.chain,
                            buy: rate[url.buy],
                            sell: rate[url.sell],
                            currency: isoCurrency
                        };
                    }
                }
            }
        })
           
            var objMapToArr = require('object-map-to-array');
                function runArray ()
                {
                    console.log("Updating API");
                    console.log("URL: "+ url.address);
                    console.log("Number of rows to update: "+ Object.keys(jsonOutput).length);
                    var promises = objMapToArr(jsonOutput,asyncFunc);
                    return Promise.all(promises);
                }
            return new Promise((resolve, reject) =>{
                    runArray().then(function(result) {
                    console.log("Done with " + url.address);
                    resolve(global.Report);
                    })
                
            });
}
var asyncFunc = function(item) {
    
    var apigClient = apigClientFactory.default.newClient({
                accessKey: '****',
                secretKey: '****',
                invokeUrl: '****'
            });

            var pathTemplate = '/staging/rates';
            var method = 'POST';
            var typeofexchange = "";
            if (item.name === "" && item.id === "")
            {
                typeofexchange = "chain";
                var body =
                {
                    currency: item.currency,
                    chain: item.chain,
                    buy: parseFloat(item.buy),
                    sell: parseFloat(item.sell)
                };
            }else if (item.name === "" && item.chain === "")
            {
                typeofexchange = "id";
                var body =
                {
                    currency: item.currency,
                    id: item.id,
                    buy: parseFloat(item.buy),
                    sell: parseFloat(item.sell)
                };
            }else
            {
                typeofexchange = "name";
                var body =
                {
                    currency: item.currency,
                    name: item.name,
                    buy: parseFloat(item.buy),
                    sell: parseFloat(item.sell)
                };
            }
            
    return new Promise(function(resolve, reject) {
        apigClient.invokeApi({}, pathTemplate, method, {}, body)
        .then(function (result) {
            console.log('\r\n--------------------------------------------');
            var res = JSON.stringify(result.data);
            if (res !== '{"status":"ok"}')
            {
                console.log("failed: Updating => " + body.currency + '\r\n' + item.address );
                global.Report.numberOfFailed++;
                console.log(JSON.stringify(result.data));
                console.log('--------------------------------------------');
                global.Report.failedReportList.push(item.address+"\treason => There is a problem with name/chain/id.");
                resolve('error');
            }
            else
            {
                console.log("Success: Updating => " + body.currency + '\r\n' + item.address );
                global.Report.numberOfSuccess++;
                console.log(JSON.stringify(result.data));
                console.log('--------------------------------------------');
                resolve('ok');
            }
           
        }).catch(function (result) {
            console.log("failed: Updating => " + body.currency + '\r\n' + item.address );
            console.log(JSON.stringify(result.data));
            global.Report.numberOfFailed++;
            console.log('--------------------------------------------');
            global.Report.failedReportList.push(item.address+"\treason => There is a problem with the server request./id");          
            resolve('error');
        });

    })
}

////run => source app-env
////commits => heroku releases --app cambiu-update | grep -om 1 "[0-9a-f]\{7\}" | xargs git show
