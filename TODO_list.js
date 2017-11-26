
function UrlClass(address,exchangeId,chain,name,numberOfTable,base_currency ,currency,buy,sell,type)
{
    this.address = address;
    this.exchangeId = exchangeId;
    this.chain = chain;
    this.name = name;
    this.numberOfTable = numberOfTable;
    this.base_currency = base_currency;
    this.currency = currency;
    this.sell = sell;
    this.buy = buy;
    this.type = (type) ? type : ""; 
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
        urlsToScrape.push(new UrlClass('http://finance.debenhams.com/travel-money/exchange-rates/',"16","Travelex Hong Kong","",0,'GBP','Currency','Standard Buy Rate','Standard Sell Rate','indirect'));
        urlsToScrape.push(new UrlClass('https://cashchanger.co/singapore/mc/iban-express/4',"1518","","Iban Express",0,'SGD','0','WE BUY','WE SELL','direct'));
        urlsToScrape.push(new UrlClass('https://cashchanger.co/singapore/mc/razack-custom-clothiers-rcc-exchange/76',"1544","","RCC Exchange",0,'SGD','0','WE BUY','WE SELL','direct'));
        urlsToScrape.push(new UrlClass('https://cashchanger.co/singapore/mc/silver-river-money-changer/63',"1546","","Silver River Money Changer",0,'SGD','0','WE BUY','WE SELL','direct'));
        urlsToScrape.push(new UrlClass('https://cashchanger.co/singapore/mc/faizura-trading/95',"1560","","Faizura Trading",0,'SGD','0','WE BUY','WE SELL','direct'));
        urlsToScrape.push(new UrlClass('https://cashchanger.co/singapore/mc/central-exchange/85',"1569","","Central Exchange",0,'SGD','0','WE BUY','WE SELL','direct'));
        urlsToScrape.push(new UrlClass('https://cashchanger.co/singapore/mc/swift-exchange-jem/58',"1572","","Swift Exchange",0,'SGD','0','WE BUY','WE SELL','direct'));
        urlsToScrape.push(new UrlClass('https://cashchanger.co/singapore/mc/extract-money-changer/42',"1579","","Extract Money Changer",0,'SGD','0','WE BUY','WE SELL','direct'));
        urlsToScrape.push(new UrlClass('https://cashchanger.co/singapore/mc/changi-money-changer-s-pte-ltd/108',"1584","","Changi Money Changer",0,'SGD','0','WE BUY','WE SELL','direct'));
        urlsToScrape.push(new UrlClass('https://cashchanger.co/singapore/mc/million-dollar-exchange/97',"1589","","Million Dollar Exchange",0,'SGD','0','WE BUY','WE SELL','direct'));
        urlsToScrape.push(new UrlClass('http://www.luxor-exchange.ro/bucuresti',"85","Cheque Centre","",0,'GBP','1','2','3','direct'));
        urlsToScrape.push(new UrlClass('https://www.uaeexchange.com/gbr-foreign-exchange',"385","","UAE Exchange",0,'GBP','Code','Buy FC','Sell FC','indirect'));
        urlsToScrape.push(new UrlClass('https://www.iceplc.com/travel-money/exchange-rates',"6","International Currency Exchange","",5,'GBP','1','2','','indirect'));
        urlsToScrape.push(new UrlClass('https://www.thomasexchangeglobal.co.uk/exchange-rates-check-exchange-rates.php',"9","Thomas exchange global","",5,'GBP','1','2','3','indirect'));
        urlsToScrape.push(new UrlClass('https://www.thomasexchange.co.uk/i_banknote_rates.asp',"361","","Thomas Exchange UK",0,'GBP','0','1','2','indirect'));
        urlsToScrape.push(new UrlClass('http://www.tokyo-card.co.jp/exchange/rate1.php',"90","world currency shop","",0,'JPY','Foreign Currency    Yen\n(CASH)','1','','direct'));
        urlsToScrape.push(new UrlClass('http://www.nailasmoneychanger.com/',"274","Nailas Money Changer","",0,'PHP','0','2',''));
       
        //<----------------------Urls without table---------------------->
        urlsToScrapeNoTable.push(new UrlClass('https://www.ppfbanka.cz/en/exchange-rates',"4436","","PPF banka",0,'CZK','currency','buy','sell','direct'));
        urlsToScrapeNoTable.push(new UrlClass('https://lacurrency.com/',"157","lacurrency","",0,'USD','currency','buy','sell','direct'));
        urlsToScrapeNoTable.push(new UrlClass('https://www.xchangeofamerica.com/home',"161","Xchange of America","",0,'USD','currency','buy','sell','direct'));
        urlsToScrapeNoTable.push(new UrlClass('https://www.exchange.cz/',"4386","","eXchange",0,'CZK','currency','buy','sell','direct'));
        // urlsToScrapeNoTable.push(new UrlClass('http://www.pnb.com.ph/index.php/personal-banking/foreign-exchange-rates',"4443","","PNB",0,'PHP','currency','buy','sell','direct'));
        urlsToScrapeNoTable.push(new UrlClass('https://www.kb.cz/kurzovni-listek/en/rl/index.x',"4437","","Komerční banka",0,'CZK','currency','buy','sell','direct'));
        urlsToScrapeNoTable.push(new UrlClass('https://portal.banamex.com.mx/c719_004/divisasMetales/es/divisas?xhost=https://www.banamex.com/',"4439","","Banamex",0,'MXN','currency','buy','sell','direct'));
        urlsToScrapeNoTable.push(new UrlClass('https://www.mizuhobank.co.jp/rate/market/quote/index.html',"4440","","Mizuho",0,'JPY','currency','buy','sell','direct'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.natwest.com/tools/personal/currency_rates/',"409","","Natwest",0,'GBP','currency','buy','sell','indirect'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.netdania.com/quotes/forex-sterling',"570","","netdania",0,'GBP','currency','buy','sell','indirect'));
        urlsToScrapeNoTable.push(new UrlClass('http://bestexchange.co.uk/?q=exchange-rates',"30","Best Exchange","",0,'GBP','currency','buy','sell','indirect'));
        urlsToScrapeNoTable.push(new UrlClass('https://www.ace-fx.com/exchange-rates/',"6","Ace-FX","",0,'GBP','currency','buy','sell','indirect'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.bankleumi.co.il/vgnprod/shearim.asp?sitePrefix=',"4375","","Leumi",0,'ILS','currency','buy','sell','direct'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.sakura-currency.co.jp/roppongi/',"92","sakura currency service","",0,'JPY','currency','buy','sell','direct'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.ccsole.com.mx/',"4132","","Centro Cambiario Sole",0,'MXN','currency','buy','sell','direct'));
        urlsToScrapeNoTable.push(new UrlClass('https://www.exchange8.cz/en/#close',"4390","","Exchange 8",0,'CZK','currency','buy','sell','direct'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.nekazanka-exchange.cz/',"4412","","Nekazanka Exchange",0,'CZK','currency','buy','sell','direct'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.goldenexchange.cz/kurzy.php',"4413","","Golden Exchange",0,'CZK','currency','buy','sell','direct'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.cernaruze-exchange.cz/',"4416","","Černá Růže Exchange",0,'CZK','currency','buy','sell','direct'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.top-exchange.cz/index.php',"4417","","TOPEXchange",0,'CZK','currency','buy','sell','direct'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.changeoffice.wz.cz/kurzy.php',"4420","","Abraham Exchange",0,'CZK','currency','buy','sell','direct'));
        urlsToScrapeNoTable.push(new UrlClass('https://www.pottchange.com/en/exchange-rates/',"1691","","pott change",0,'EUR','currency','buy','sell','direct'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.hanifachange.hu/',"1079","","HANIFA CHANGE",0,'HUF','currency','buy','sell','direct'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.handmchange.hu/?uzlet=1',"1080","","H & M Ltd. CHANGE",0,'HUF','currency','buy','sell','direct'));
        urlsToScrapeNoTable.push(new UrlClass('https://jokervaluta.hu/',"72","72","",0,'HUF','currency','buy','sell','direct'));
        urlsToScrapeNoTable.push(new UrlClass('http://correctchange.hu/index.php?p=arf',"73","correct change","",0,'HUF','currency','buy','sell','direct'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.adamtravel.hu/',"74","Adam Travel Ltd.","",0,'HUF','currency','buy','sell','direct'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.barari.hu/',"1124","","Bararee Trade KFTs",0,'HUF','currency','buy','sell','direct'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.akkadbros.hu/index.php',"75","Bros Ltd Akkad.","",0,'HUF','currency','buy','sell','direct'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.iblachange.hu/index.htm',"76","Ibla change","",0,'HUF','currency','buy','sell','direct'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.kantorchange.hu/',"1129","","Kantor-change LTD.",0,'HUF','currency','buy','sell','direct'));
        urlsToScrapeNoTable.push(new UrlClass('http://balintchange.hu/',"77","Bálint Change","",0,'HUF','currency','buy','sell','direct'));
        urlsToScrapeNoTable.push(new UrlClass('http://jcmoneychange.com/our-services/exchange-rate/',"4435","","JC Money Change",0,'SGD','currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://asmi.hu/?uzlet=3',"78","78","",0,'HUF','currency','buy','sell','direct'));
        urlsToScrapeNoTable.push(new UrlClass('http://bspenzvalto.hu/',"1166","","BS EXCHANGE",0,'HUF','currency','buy','sell','direct'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.centrumchange.hu/',"81","centrum change","",0,'HUF','currency','buy','sell','direct'));
        urlsToScrapeNoTable.push(new UrlClass('http://dunachange.hu/en/',"1170","","Dunachange",0,'HUF','currency','buy','sell','direct'));
        urlsToScrapeNoTable.push(new UrlClass('http://users.atw.hu/kaadanchange/',"1186","","Kaadan CO Kft.",0,'HUF','currency','buy','sell','direct'));
        urlsToScrapeNoTable.push(new UrlClass('https://www.forexchange.it/l-azienda/valute/',"292","Forexchange","",0,'EUR','currency','buy','sell','indirect'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.euro-change.de/index_en.php',"297","Euro Change Wechselstuben AG","",0,'EUR','currency','buy','sell','indirect'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.exchange-ag.de/Wechselkurse.html?design=n2013',"298","298","",0,'EUR','currency','buy','sell','indirect'));
        // urlsToScrapeNoTable.push(new UrlClass('http://romeexchange.com/',"4478","","Rome exchange",0,'EUR','currency','buy','sell','indirect'));
        urlsToScrapeNoTable.push(new UrlClass('http://travelmatemoney.com.au/Money-Exchange.php',"4627","","Travelmate Money Exchange",0,'AUD','currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.huspak-exchange.cz/en/exchange-rates/',"4387","","dd",0,'CZK','currency','buy','sell','direct'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.travelmoneyoz.com/foreign-currency',"4628","","Travel Money Oz",0,'AUD','currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.auraaktiv.cz/exchange-rates.html',"289","AuraAktiv","",0,'CZK','currency','buy','sell','direct'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.alfaprague.cz/web2/?site=1',"288","Exchanges ALFA PRAGUE","",0,'CZK','currency','buy','sell','direct'));        
        urlsToScrapeNoTable.push(new UrlClass('https://www.bfcexchange.co.uk/currency-exchange-rates?atype=exchange&continent=europe#animatedModal',"1","BFC","",0,'GBP','currency','buy','sell','indirect'));
        urlsToScrapeNoTable.push(new UrlClass('https://www.posb.com.sg/personal/rates-online/foreign-currency-foreign-exchange.page',"4442","","POSB",0,'SGD','currency','buy','sell','indirect'));

        
        
        
        
        
        
        
        var n = 300;
        var sleep = require('sleep');
        var finalReport;
        //Running
            Promise.map(urlsToScrape.slice(0,10),scraping).then(function(report1){
                console.log("finished with report1\r\nHibernate, wake up in 5 minutes");
                sleep.sleep(n)
                Promise.map(urlsToScrape.slice(10,urlsToScrape.length),scraping).then(function(report2){
                    console.log("finished with report2\r\nHibernate, wake up in 5 minutes");
                    sleep.sleep(n)
                    Promise.map(urlsToScrapeNoTable.slice(0,10),scrapeByUrl).then(function(report3){
                        console.log("finished with report3\r\nHibernate, wake up in 5 minutes");
                        sleep.sleep(n)
                        Promise.map(urlsToScrapeNoTable.slice(10,20),scrapeByUrl).then(function(report4){ 
                            console.log("finished with report4\r\nHibernate, wake up in 5 minutes");
                            sleep.sleep(n)
                            Promise.map(urlsToScrapeNoTable.slice(20,30),scrapeByUrl).then(function(report5){
                                console.log("finished with report5\r\nHibernate, wake up in 5 minutes");
                                sleep.sleep(n)
                                Promise.map(urlsToScrapeNoTable.slice(30,40),scrapeByUrl).then(function(report6){ 
                                    console.log("finished with report6\r\nHibernate, wake up in 5 minutes");
                                    sleep.sleep(n)
                                    Promise.map(urlsToScrapeNoTable.slice(41,urlsToScrapeNoTable.length),scrapeByUrl).then(function(report7){ 
                                            console.log("finished with report7\r\nPreparing the final report to send");
                                            var temparr = [];
                                            for (var x = 0; x < report1[0].failedReportList.length; x++)
                                            {
                                                temparr.push(report1[0].failedReportList[x])
                                            }
                                            for (x = 0; x < report2[0].failedReportList.length; x++)
                                            {
                                                temparr.push(report2[0].failedReportList[x])
                                            }
                                            for (x = 0; x < report3[0].failedReportList.length; x++)
                                            {
                                                temparr.push(report3[0].failedReportList[x])
                                            }
                                            for (x = 0; x < report4[0].failedReportList.length; x++)
                                            {
                                                temparr.push(report4[0].failedReportList[x])
                                            }
                                            for (x = 0; x < report5[0].failedReportList.length; x++)
                                            {
                                                temparr.push(report5[0].failedReportList[x])
                                            }
                                            for (x = 0; x < report6[0].failedReportList.length; x++)
                                            {
                                                temparr.push(report6[0].failedReportList[x])
                                            }
                                            for (x = 0; x < report7[0].failedReportList.length; x++)
                                            {
                                                temparr.push(report7[0].failedReportList[x])
                                            }
                                            finalReport =
                                            {
                                                failedReportList: temparr,
                                                numberOfSuccess: report1[0].numberOfSuccess,
                                                numberOfFailed: report1[0].numberOfFailed,
                                                date: moment.tz("Asia/Jerusalem").format('DD/MM/YYYY'),
                                                time: moment.tz("Asia/Jerusalem").format('HH:mm:ss')
                                            }
                                            resolve(finalReport);
                                    }).catch(function(){
                                        console.log("Problem with the report 7");
                                    }) 
                                }).catch(function(){
                                    console.log("Problem with the report 6");
                                })                  
                            }).catch(function(){
                                console.log("Problem with the report 5");
                            }) 
                        }).catch(function(){
                            console.log("Problem with the report 4");
                        })                  
                    }).catch(function(){
                        console.log("Problem with the report 3");
                    })                    
                }).catch(function(){
                    console.log("Problem with the report 2");
                })        
            }).catch(function(){
                console.log("Problem with the report 1");
            })
    })
    
}
exports.todoList = todoList;

//Problems:
//Extract.update('Travelex', nil, "https://www.travelex.co.uk/currency/exchange-rates", 'html')
