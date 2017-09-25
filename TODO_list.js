
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
        // urlsToScrapeNoTable.push(new UrlClass('https://www.raiffeisen.ru/en/currency_rates/#offices',"","","Raiffeisen Bank",0,'currency','buy','sell'));
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
        urlsToScrapeNoTable.push(new UrlClass('https://www.pottchange.com/en/exchange-rates/',"1691","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.hanifachange.hu/',"","","HANIFA CHANGE",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.handmchange.hu/?uzlet=1',"1080","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('https://jokervaluta.hu/',"72","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://correctchange.hu/index.php?p=arf',"73","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.adamtravel.hu/',"74","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.barari.hu/',"","","Bararee Trade KFTs",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.akkadbros.hu/index.php',"75","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.iblachange.hu/index.htm',"76","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.kantorchange.hu/',"1129","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://balintchange.hu/',"77","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://jcmoneychange.com/our-services/exchange-rate/',"4435","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://asmi.hu/?uzlet=3',"78","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://bspenzvalto.hu/',"1166","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.centrumchange.hu/',"81","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://dunachange.hu/en/',"1170","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://users.atw.hu/kaadanchange/',"1186","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://kiralypenzvalto.hu/',"83","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('https://www.forexchange.it/l-azienda/valute/',"292","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://www.euro-change.de/index_en.php',"297","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('www.exchange-ag.de/Wechselkurse.html?design=n2013',"298","","",0,'currency','buy','sell'));
        urlsToScrapeNoTable.push(new UrlClass('http://romeexchange.com/',"4478","","",0,'currency','buy','sell'));

        
        
        
        
        
        
        
        
        
        
        
        
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
                                    Promise.map(urlsToScrapeNoTable.slice(40,urlsToScrapeNoTable.length),scrapeByUrl).then(function(report7){ 
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
