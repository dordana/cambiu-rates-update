
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
        urlsToScrape.push(new UrlClass('http://finance.debenhams.com/travel-money/exchange-rates/',"16","","",0,'Currency','Standard Buy Rate','Standard Sell Rate'));
        urlsToScrape.push(new UrlClass('http://interafrica.webalytics.co.za/customcontent/Rates.php',"99","","",0,'Currency','Buy Rate','Sell Rate'));
        urlsToScrape.push(new UrlClass('http://www.mastercurrency.co.za/rates.aspx',"1625","","",0,'Code','We Buy','We Sell'));
        urlsToScrape.push(new UrlClass('http://www.towerfx.co.za/index.php/rate-board',"102","","",0,'2','3','4'));
        urlsToScrape.push(new UrlClass('https://cashchanger.co/singapore/mc/iban-express/4',"1518","","",0,'0','WE BUY','WE SELL'));
        urlsToScrape.push(new UrlClass('https://cashchanger.co/singapore/mc/razack-custom-clothiers-rcc-exchange/76',"1544","","",0,'0','WE BUY','WE SELL'));
        urlsToScrape.push(new UrlClass('https://cashchanger.co/singapore/mc/silver-river-money-changer/63',"1546","","",0,'0','WE BUY','WE SELL'));
        urlsToScrape.push(new UrlClass('https://cashchanger.co/singapore/mc/faizura-trading/95',"1560","","",0,'0','WE BUY','WE SELL'));
        urlsToScrape.push(new UrlClass('https://cashchanger.co/singapore/mc/central-exchange/85',"1569","","",0,'0','WE BUY','WE SELL'));
        urlsToScrape.push(new UrlClass('https://cashchanger.co/singapore/mc/swift-exchange-jem/58',"1572","","",0,'0','WE BUY','WE SELL'));
        urlsToScrape.push(new UrlClass('https://cashchanger.co/singapore/mc/extract-money-changer/42',"1579","","",0,'0','WE BUY','WE SELL'));
        urlsToScrape.push(new UrlClass('https://cashchanger.co/singapore/mc/changi-money-changer-s-pte-ltd/108',"1584","","",0,'0','WE BUY','WE SELL'));
        urlsToScrape.push(new UrlClass('https://cashchanger.co/singapore/mc/million-dollar-exchange/97',"","","Million Dollar Exchange",0,'0','WE BUY','WE SELL'));
        urlsToScrape.push(new UrlClass('http://www.luxor-exchange.ro/bucuresti',"85","","",0,'1','2','3'));
        urlsToScrape.push(new UrlClass('https://www.ppfbanka.cz/en/documents-and-important-information/currency-exchange-rates.html',"4436","","",0,'0','5','6'));
        urlsToScrape.push(new UrlClass('https://www.uaeexchange.com/gbr-foreign-exchange',"385","","",0,'Code','Buy FC','Sell FC'));
        urlsToScrape.push(new UrlClass('https://www.iceplc.com/travel-money/exchange-rates',"6","","",5,'1','2',''));
        // urlsToScrape.push(new UrlClass('https://www.eurochange.co.uk/travel-money/exchange-rates',"","Eurochange PLC","",0,'Currency','Standard Rate',''));
        urlsToScrape.push(new UrlClass('https://www.thomasexchangeglobal.co.uk/exchange-rates-check-exchange-rates.php',"9","","",5,'1','2','3'));
        urlsToScrape.push(new UrlClass('https://www.thomasexchange.co.uk/i_banknote_rates.asp',"","","Thomas Exchange UK",0,'0','1','2'));
        urlsToScrape.push(new UrlClass('http://www.tokyo-card.co.jp/exchange/rate1.php',"90","","",0,'Foreign Currency    Yen\n(CASH)','1',''));
        urlsToScrape.push(new UrlClass('http://www.nailasmoneychanger.com/',"274","","",0,'0','2',''));
       
        //<----------------------Urls without table---------------------->
        urlsToScrapeNoTable.push(new UrlClass('https://lacurrency.com/',"157","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('https://www.xchangeofamerica.com/home',"161","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('https://www.exchange.cz/',"4386","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.pnb.com.ph/index.php/personal-banking/foreign-exchange-rates',"4443","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('https://www.csas.cz/banka/appmanager/portal/banka?_nfpb=true&_pageLabel=exchangerates_subportal01',"4438","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('https://www.kb.cz/kurzovni-listek/en/rl/index.x',"4437","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('https://www.otpbank.hu/portal/en/Rates/ForeignExchRates',"4441","","",0,'currency','buy','sell'));
        // urlsToScrapeNoTable.push(new UrlClass('https://www.changeme.co.il/index.php/%D7%94%D7%96%D7%9E%D7%A0%D7%AA-%D7%9E%D7%98%D7%B4%D7%97',"700","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('https://www.raiffeisen.ru/en/currency_rates/#offices',"","","Raiffeisen Bank",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('https://www.posb.com.sg/personal/rates-online/foreign-currency-foreign-exchange.page',"4442","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('https://portal.banamex.com.mx/c719_004/divisasMetales/es/divisas?xhost=https://www.banamex.com/',"4439","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('https://www.mizuhobank.co.jp/rate/market/quote/index.html',"4440","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('https://www.bfcexchange.co.uk/currency-exchange-rates?atype=exchange&continent=europe#animatedModal',"","BFC","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('https://cecltd.com/?q=exchange-rates',"","CEC","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.natwest.com/tools/personal/currency_rates/',"409","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.netdania.com/quotes/forex-sterling',"570","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://bestexchange.co.uk/?q=exchange-rates',"30","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('https://www.ace-fx.com/exchange-rates/',"6","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.bankleumi.co.il/vgnprod/shearim.asp?sitePrefix=',"4375","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.sakura-currency.co.jp/roppongi/',"92","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.ccsole.com.mx/',"4132","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.huspak-exchange.cz/en/exchange-rates/',"4387","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.alfaprague.cz/web2/?site=1',"","Exchanges ALFA PRAGUE","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('https://www.exchange8.cz/en/#close',"4390","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.auraaktiv.cz/exchange-rates.html',"","AuraAktiv","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.nekazanka-exchange.cz/',"4412","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.goldenexchange.cz/kurzy.php',"4413","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.provaznickaexchange.cz/novy.php',"4415","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.cernaruze-exchange.cz/',"4416","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.top-exchange.cz/index.php',"4417","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.top-exchange.cz/index.php',"4419","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.changeoffice.wz.cz/kurzy.php',"4420","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('https://www.pottchange.com/en/exchange-rates/',"","","sss",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.hanifachange.hu/',"","","HANIFA CHANGE",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.handmchange.hu/?uzlet=1',"","","sss",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('https://jokervaluta.hu/',"","","jolly joker",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://starchange-penzvalto.hu/',"","","star change",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://correctchange.hu/index.php?p=arf',"","","correct change",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.adamtravel.hu/',"","","Adam Travel Ltd",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.barari.hu/',"","","Bararee Trade KFTs",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.akkadbros.hu/index.php',"","","Bros Ltd Akkad",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.iblachange.hu/index.htm',"","","Ibla change",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.kantorchange.hu/',"","","Kantor-change LTD",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://balintchange.hu/',"","","Bálint Change",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://jcmoneychange.com/our-services/exchange-rate/',"4435","","",0,'currency','buy','sell'));

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        var finalReport;
        
        //Running
            Promise.map(urlsToScrape,scraping).then(function(report_sc){
                Promise.map(urlsToScrapeNoTable,scrapeByUrl).then(function(report)
                {
                    var temparr = [];
                    for (var x = 0; x < report_sc[0].failedReportList.length; x++)
                    {
                        temparr.push(report_sc[0].failedReportList[x])
                    }
                    for (x = 0; x < report[0].failedReportList.length; x++)
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
                }).catch(function(){
                    console.log("Problem with the process 2");
                })
            }).catch(function(){
                    console.log("Problem with the process 1");
                })
    })
    
}
exports.todoList = todoList;

//Problems:
//Extract.update('Travelex', nil, "https://www.travelex.co.uk/currency/exchange-rates", 'html')
