
function UrlClass(address,exchangeId,chain,name,numberOfTable,currency,buy,sell)
{
    this.address = address;
    this.exchangeId = exchangeId;
    this.chain = chain;
    this.name = name;
    this.numberOfTable = numberOfTable;
    this.currency = currency;
    this.sell = sell;
    this.buy = buy;
}

const   scraping = require("./scraping.js").Scraping,
        scrapingNoTable = require("./scraping.js").ScrapingNoTable,
        returnFunc = require("./functions.js").returnFunc,
        moment = require('moment-timezone'),
        Promise = require("bluebird");

const todoList = function todoList()
{
    var urlsToScrape = [];
    var urlsToScrapeNoTable = [];
    
    return new Promise((resolve, reject) =>{
        //<----------------------Urls table---------------------->
        urlsToScrape.push(new UrlClass('http://finance.debenhams.com/travel-money/exchange-rates/',"","Debenhams","",0,'Currency','Standard Buy Rate','Standard Sell Rate'));
        urlsToScrape.push(new UrlClass('http://interafrica.webalytics.co.za/customcontent/Rates.php',"","inter africa","",0,'Currency','Buy Rate','Sell Rate'));
        urlsToScrape.push(new UrlClass('http://www.mastercurrency.co.za/rates.aspx',"","","master currency",0,'Code','We Buy','We Sell'));
        urlsToScrape.push(new UrlClass('http://www.towerfx.co.za/index.php/rate-board',"","Tower Bureau de Change","",0,'2','3','4'));
        urlsToScrape.push(new UrlClass('http://jcmoneychange.com/our-services/exchange-rate/',"","JC Money Change","",0,'0','2','3'));
        urlsToScrape.push(new UrlClass('https://cashchanger.co/singapore/mc/iban-express/4',"","","Iban Express",0,'0','WE BUY','WE SELL'));
        urlsToScrape.push(new UrlClass('https://cashchanger.co/singapore/mc/razack-custom-clothiers-rcc-exchange/76',"","","RCC Exchange",0,'0','WE BUY','WE SELL'));
        urlsToScrape.push(new UrlClass('https://cashchanger.co/singapore/mc/silver-river-money-changer/63',"","","Silver River Money Changer",0,'0','WE BUY','WE SELL'));
        urlsToScrape.push(new UrlClass('https://cashchanger.co/singapore/mc/faizura-trading/95',"","","Faizura Trading",0,'0','WE BUY','WE SELL'));
        urlsToScrape.push(new UrlClass('https://cashchanger.co/singapore/mc/central-exchange/85',"","","Central Exchange",0,'0','WE BUY','WE SELL'));
        urlsToScrape.push(new UrlClass('https://cashchanger.co/singapore/mc/swift-exchange-jem/58',"","","Swift Exchange",0,'0','WE BUY','WE SELL'));
        urlsToScrape.push(new UrlClass('https://cashchanger.co/singapore/mc/extract-money-changer/42',"","","Extract Money Changer",0,'0','WE BUY','WE SELL'));
        urlsToScrape.push(new UrlClass('https://cashchanger.co/singapore/mc/changi-money-changer-s-pte-ltd/108',"","","Changi Money Changer",0,'0','WE BUY','WE SELL'));
        urlsToScrape.push(new UrlClass('https://cashchanger.co/singapore/mc/million-dollar-exchange/97',"","","Million Dollar Exchange",0,'0','WE BUY','WE SELL'));
        urlsToScrape.push(new UrlClass('http://www.luxor-exchange.ro/bucuresti',"","luxor","",0,'1','2','3'));
        
        
        
        //<----------------------Urls without table---------------------->
        urlsToScrapeNoTable.push(new UrlClass('https://lacurrency.com/',"","LAcurrency","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('https://www.xchangeofamerica.com/home',"","Xchange of America","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('https://www.exchange.cz/',"","","eXchange",0,'currency','buy','sell'));
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        var finalReport;
        
        //Running
            Promise.map(urlsToScrape,scraping).then(function(){
                Promise.map(urlsToScrapeNoTable,returnFunc).then(function(data)
                {
                    var temparr = [];
                    for (var x = 0; x < data[0].failedReportList.length; x++)
                    {
                        temparr.push(data[0].failedReportList[x])
                    }
                    finalReport =
                    {
                        failedReportList: temparr,
                        numberOfSuccess: data[0].numberOfSuccess,
                        numberOfFailed: data[0].numberOfFailed,
                        date: moment.tz("Asia/Jerusalem").format('DD/MM/YYYY'),
                        time: moment.tz("Asia/Jerusalem").format('HH:mm:ss')
                    }
                    resolve(finalReport);
                })
            })
    })
    
}
exports.todoList = todoList;


// function sendEmailReport()
// {

//   console.log("Sending a email to dordanaa@gmail.com");
//   var api_key = 'key-eef1b14f1229530c25fadbb64e12c8f6';
//   var domain = 'sandbox3fc985a1f4274f558f5239547f7a9c33.mailgun.org';
//   var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

//   var data = {
//     from: 'Cambiu - Update rates report <postmaster@sandbox3fc985a1f4274f558f5239547f7a9c33.mailgun.org>',
//     to: 'dordanaa@gmail.com',
//     subject: 'Cambiu - Update rates report',
//     text: ' \r\n['+timestamp('DD/MM/YYYY HH:mm:ss')+']\r\n *Update report*\r\n' + 'Number of success: ' + Report.numberOfSuccess  + '\r\nNumber of failed: ' + Report.numberOfFailed

//   };

//   mailgun.messages().send(data, function (error, body) {
//     console.log(body);
//   });

// }