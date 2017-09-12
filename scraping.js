//Global vars
const GBPlist = ['GBP/GBP','GBP','BritishPound',"לירהשטרלינג(GBP)","לירהשטרלינג","GBPBritishPound","לירה שטרלינג (GBP)"];
const USDlist = ['UNITEDSTATESDOLLAR','USDOLLARS',"דולר(USD)",'דולרארה"ב','U.S.ADollar','USDollar(USD)','USDollar','US Dollar', 'USD', 'GBP/USD','Dollars-USA',"USDUSDollars","US",'דולר (USD)'];
const ILSlist = ['ISRAELNEWSHEKEL','ISRAELINEWSHEQELS','IsraelShekel','IsraeliShekel(ILS)','IsraeliNewShekel','ILS','NewIsraeliSheqel','GBP/ILS','Sheqel-Israel',"New"];
const EURlist = ['EUROEuro','Euro(EUR)','CEEEuro','EUR',"יורו(EUR)",'אירו', 'GBP/EUR','Euro','EURO','Euro-Europe',"EUREuro","יורו (EUR)"];
const AUDlist = ['AUSTRALIADOLLAR','AUSTRALIANDOLLARS','AustraliaDollar','AustralianDollar(AUD)','AustraliaDólar',"דולראוסטרלי(AUD)","דולראוסטרלי",'AUD','Australian Dollar','AustralianDollar','GBP/AUD','Dollars-Australia','AUS',"דולר אוסטרלי (AUD)","AUDAustralianDollar","Australian"];
const CADlist = ['CANADADOLLAR','CANADIANDOLLARS','CanadaDollar','CanadianDollar(CAD)','CanadaDólar','CAD','Canadian Dollar',"דולרקנדי(CAD)","דולרקנדי", 'GBP/CAD', 'CanadianDollar','Dollars-Canada','CAN',"Canadian","דולר קנדי (CAD)"];
const JPYlist = ['JAPANYEN','JAPANESEYEN','JapanYen',"ייןיפני(JPY)","יןיפני",'JapaneseYen(JPY)','JapónYen','JPY','Japanese Yen',"JPN", 'GBP/JPY','JapaneseYen','Yen-Japan',"JPYJapaneseYen","Japanese","יין יפני (JPY)"];
const CNYlist = ['CHINAYUANRENMINBI','CHINESEYUAN','ChinaYuan','ChineseYuan(CNY)','CNY','ChineseYuan', 'ChineseYuanRenminbi','GBP/CNY',"יואןסיני(CNY)","יואן סיני (CNY)",'Yuan-China','CHN',"CNYChineseYuan(RMB)","Chinese"];
const HKDlist = ['HONGKONGDOLLAR','HONG KONG DOLLARS','HongKongDollar','HongKongDollar(HKD)','Hong KongDólar','HKD','Hong Kong Dollar', 'GBP/HKD','HongKongDollar',"דולרהונגקונגי(HKD)","דולר הונג קונגי (HKD)",'Dollars-Hongkong','HKG',"HKDHongKongDollar","Hong"];
const NOKlist = ['NORWAYKRONER','GBP/NOK','NORWEGIANKRONER','NorwayKroner','NorwegianKrone(NOK)','NOK','Norwegian Kroner',"כתרנוורוגי(NOK)","כתרנורווגי", 'GBP/NOK','NorwegianKrone',"כתר נוורוגי (NOK)",'Kroner-Norway',"Norwegian"];
const CZKlist = ['CZECHKORUNA','CzechRepKoruna','CzechKoruna(CZK)','CZK','CzechKoruna','GBP/CZK','CzechRepublicKoruna','Koruna-Czech',"כתרצ'כי","כתר צ'כי"];
const LEUlist = ['ROMANIANLEU','ROMANIAN LEU','RomaniaLeu','Leu-Rumania','RomanianLeu(RON)','LEU','GBP/LEU','Romanian Leu',"RomanianLeu","RON","ליירומני(RON)"];
const PLNlist = ['POLANDZLOTY','POLISHZLOTY','PolandZlotys','PLN','Zloty-Poland','GBP/PLN',"PolishZloty","זלוטיפולני(PLN)","זלוטי פולני (PLN)"];
const CHFlist = ['SWITZERLANDFRANC','SWISSFRANCS','SwitzerlandFranc','SwissFranc(CHF)',"פרנקשוויצרי(CHF)","פרנקשוויצרי",'SuizaFranco','CHF','Franc-Switzerland','Swiss Franc',"SWF",'GBP/CHF',"SwissFranc","פרנק שוויצרי (CHF)"];
const THBlist = ['THAILANDBAHT','THAIBAHTS','ThailandBaht','ThaiBaht(THB)','Baht-Thailand','THB','Thai Baht',"THA",'GBP/THB',"ThaiBaht"];
const PHPlist = ['PHILIPPINESPESOS','PHILIPPINESPISO','PhillipinesPeso','Peso-Phillipines','PhilippinesPeso(PHP)','PHP','GBP/PHP',"PhilippinePeso"];
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
    if (isNaN(val))
        return false;
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
        return null;
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
                    
            })
        });
        
        function scrape (tablesAsJson)
        {
            
            var exchangeJson = tablesAsJson[url.numberOfTable];
            
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
                    if (rate[url.sell] === undefined)
                    {
                        rate[url.sell] = 0.0;
                    }else
                    {
                        rate[url.sell] = checkRates(rate[url.sell]);
                    }
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
                    rate[url.currency] = rate[url.currency].replace(/\s|\r\n|\s\r\n|\r\n\s/g,'');
                    
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
                accessKey: 'AKIAIY6K5IKEXG7EGC6A',
                secretKey: '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',
                region: 'us-west-2',
                invokeUrl: 'https://cz471val2d.execute-api.us-west-2.amazonaws.com'
            });

            var pathTemplate = '/staging/rates';
            // var pathTemplate = '/production/rates';
            
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
                console.log("failed: Updating => " + body.currency,body.buy,body.sell + '\r\n' + item.address );
                global.Report.numberOfFailed++;
                console.log(res);
                console.log('--------------------------------------------');
                global.Report.failedReportList.push(item.address+"\treason => There is a problem with name/chain/id.");
                resolve('error');
            }
            else
            {
                console.log("Success: Updating => " + body.currency,body.buy,body.sell + '\r\n' + item.address );
                global.Report.numberOfSuccess++;
                console.log(res);
                console.log('--------------------------------------------');
                resolve('ok');
            }
           
        }).catch(function (result) {
            console.log(body.currency,body.buy,body.sell);
            console.log("Server failed: Updating => " + body.currency,body.buy,body.sell + '\r\n' + item.address );
            global.Report.numberOfFailed++;
            console.log('--------------------------------------------');
            global.Report.failedReportList.push(item.address+"\treason => There is a problem with the server request.");          
            resolve('error');
        });

    })
}

////run => source app-env
////commits => heroku releases --app cambiu-update | grep -om 1 "[0-9a-f]\{7\}" | xargs git show
