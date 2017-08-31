
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
        scrapeByUrl = require("./functions.js").scrapeByUrl,
        moment = require('moment-timezone'),
        Promise = require("bluebird");


const todoList = function todoList()
{
    var urlsToScrape = [];
    var urlsToScrapeNoTable = [];
    
    return new Promise((resolve, reject) =>{
        //<----------------------Urls table---------------------->
        // urlsToScrape.push(new UrlClass('http://finance.debenhams.com/travel-money/exchange-rates/',"","Debenhams","",0,'Currency','Standard Buy Rate','Standard Sell Rate'));
        // urlsToScrape.push(new UrlClass('http://interafrica.webalytics.co.za/customcontent/Rates.php',"","inter africa","",0,'Currency','Buy Rate','Sell Rate'));
        // urlsToScrape.push(new UrlClass('http://www.mastercurrency.co.za/rates.aspx',"1625","","",0,'Code','We Buy','We Sell'));
        // urlsToScrape.push(new UrlClass('http://www.towerfx.co.za/index.php/rate-board',"","Tower Bureau de Change","",0,'2','3','4'));
        // urlsToScrape.push(new UrlClass('http://jcmoneychange.com/our-services/exchange-rate/',"","JC Money Change","",0,'0','2','3'));
        // urlsToScrape.push(new UrlClass('https://cashchanger.co/singapore/mc/iban-express/4',"","","Iban Express",0,'0','WE BUY','WE SELL'));
        // urlsToScrape.push(new UrlClass('https://cashchanger.co/singapore/mc/razack-custom-clothiers-rcc-exchange/76',"","","RCC Exchange",0,'0','WE BUY','WE SELL'));
        // urlsToScrape.push(new UrlClass('https://cashchanger.co/singapore/mc/silver-river-money-changer/63',"","","Silver River Money Changer",0,'0','WE BUY','WE SELL'));
        // urlsToScrape.push(new UrlClass('https://cashchanger.co/singapore/mc/faizura-trading/95',"","","Faizura Trading",0,'0','WE BUY','WE SELL'));
        // urlsToScrape.push(new UrlClass('https://cashchanger.co/singapore/mc/central-exchange/85',"","","Central Exchange",0,'0','WE BUY','WE SELL'));
        // urlsToScrape.push(new UrlClass('https://cashchanger.co/singapore/mc/swift-exchange-jem/58',"","","Swift Exchange",0,'0','WE BUY','WE SELL'));
        // urlsToScrape.push(new UrlClass('https://cashchanger.co/singapore/mc/extract-money-changer/42',"","","Extract Money Changer",0,'0','WE BUY','WE SELL'));
        // urlsToScrape.push(new UrlClass('https://cashchanger.co/singapore/mc/changi-money-changer-s-pte-ltd/108',"","","Changi Money Changer",0,'0','WE BUY','WE SELL'));
        // urlsToScrape.push(new UrlClass('https://cashchanger.co/singapore/mc/million-dollar-exchange/97',"","","Million Dollar Exchange",0,'0','WE BUY','WE SELL'));
        // urlsToScrape.push(new UrlClass('http://www.luxor-exchange.ro/bucuresti',"","luxor","",0,'1','2','3'));
        // urlsToScrape.push(new UrlClass('https://www.ppfbanka.cz/en/documents-and-important-information/currency-exchange-rates.html',"","","PPF banka",0,'0','5','6'));
       
        
        
        //<----------------------Urls without table---------------------->
        // urlsToScrapeNoTable.push(new UrlClass('https://lacurrency.com/',"","LAcurrency","",0,'currency','buy','sell'));
        // urlsToScrapeNoTable.push(new UrlClass('https://www.xchangeofamerica.com/home',"","Xchange of America","",0,'currency','buy','sell'));
        // urlsToScrapeNoTable.push(new UrlClass('https://www.exchange.cz/',"","","eXchange",0,'currency','buy','sell'));
        // urlsToScrapeNoTable.push(new UrlClass('http://www.pnb.com.ph/index.php/personal-banking/foreign-exchange-rates',"","","PNB",0,'currency','buy','sell'));
        // urlsToScrapeNoTable.push(new UrlClass('https://bcrmobileapp.24banking.ro/bcrmobileapp/v3/anonymousServices.do?event=getBaseFx',"","BCR","",0,'currency','buy','sell'));
        // urlsToScrapeNoTable.push(new UrlClass('https://www.csas.cz/banka/appmanager/portal/banka?_nfpb=true&_pageLabel=exchangerates_subportal01',"","","Česká spořitelna",0,'currency','buy','sell'));
        // urlsToScrapeNoTable.push(new UrlClass('https://www.kb.cz/kurzovni-listek/en/rl/index.x',"","","Komerční banka",0,'currency','buy','sell'));
        // urlsToScrapeNoTable.push(new UrlClass('https://www.otpbank.hu/portal/en/Rates/ForeignExchRates',"","","OTP",0,'currency','buy','sell'));
        // urlsToScrapeNoTable.push(new UrlClass('https://www.changeme.co.il/index.php/%D7%94%D7%96%D7%9E%D7%A0%D7%AA-%D7%9E%D7%98%D7%B4%D7%97',"","","OTP",0,'currency','buy','sell'));
        // urlsToScrapeNoTable.push(new UrlClass('https://www.raiffeisen.ru/en/currency_rates/#offices',"","","Raiffeisen Bank",0,'currency','buy','sell'));
        // urlsToScrapeNoTable.push(new UrlClass('https://www.posb.com.sg/personal/rates-online/foreign-currency-foreign-exchange.page',"","","POSB",0,'currency','buy','sell'));
        // urlsToScrapeNoTable.push(new UrlClass('https://portal.banamex.com.mx/c719_004/divisasMetales/es/divisas?xhost=https://www.banamex.com/',"","","Banamex",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('https://www.mizuhobank.co.jp/rate/market/quote/index.html',"","","Mizuho",0,'currency','buy','sell'));
       
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        var finalReport;
        
        //Running
            Promise.map(urlsToScrape,scraping).then(function(report_sc){
                Promise.map(urlsToScrapeNoTable,scrapeByUrl).then(function(report)
                {
                    
                    if (report.length !== 0)
                    {
                        var temparr = [];
                        for (var x = 0; x < report[0].failedReportList.length; x++)
                        {
                            temparr.push(report[0].failedReportList[x])
                        }
                        finalReport =
                        {
                            failedReportList: temparr,
                            numberOfSuccess: report[0].numberOfSuccess,
                            numberOfFailed: report[0].numberOfFailed,
                            date: moment.tz("Asia/Jerusalem").format('DD/MM/YYYY'),
                            time: moment.tz("Asia/Jerusalem").format('HH:mm:ss')
                        }
                        resolve(finalReport);
                    }else
                    {
                        var temparr = [];
                        for (var x = 0; x < report_sc[0].failedReportList.length; x++)
                        {
                            temparr.push(report_sc[0].failedReportList[x])
                        }
                        finalReport =
                        {
                            failedReportList: temparr,
                            numberOfSuccess: report_sc[0].numberOfSuccess,
                            numberOfFailed: report_sc[0].numberOfFailed,
                            date: moment.tz("Asia/Jerusalem").format('DD/MM/YYYY'),
                            time: moment.tz("Asia/Jerusalem").format('HH:mm:ss')
                        }
                        resolve(finalReport);
                    }
                    resolve();
                })
            })
    })
    
}
exports.todoList = todoList;

