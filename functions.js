var request = require('request');
var cheerio = require('cheerio');
var Buffer = require('buffer').Buffer;
var iconv  = require('iconv-lite');
var Promise = require("promise");

var scrapingNoTable = require("./scraping.js").ScrapingNoTable;




exports.scrapeByUrl = function scrapeByUrl(url)
{
  switch (url.address)
  {
    
    case 'https://lacurrency.com/':
    return new Promise((resolve, reject) =>{
        lacurrency().then(function (data){
            console.log("get data for url: " + url.address );
            scrapingNoTable(url,data).then(function (data){
              resolve(data);
            });
          }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });
    
    case 'https://www.xchangeofamerica.com/home':
    return new Promise((resolve, reject) =>{
        xchangeofamerica().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });
    
    
    case 'https://www.exchange.cz/':
    return new Promise((resolve, reject) =>{
        exchangecz().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });  
    
    case 'http://www.pnb.com.ph/index.php/personal-banking/foreign-exchange-rates':
    return new Promise((resolve, reject) =>{
        pnb().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    }); 
    
    case 'https://bcrmobileapp.24banking.ro/bcrmobileapp/v3/anonymousServices.do?event=getBaseFx':
    return new Promise((resolve, reject) =>{
        bcr().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    }); 
    
    case 'https://www.csas.cz/banka/appmanager/portal/banka?_nfpb=true&_pageLabel=exchangerates_subportal01':
    return new Promise((resolve, reject) =>{
        csas().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });
    
    case 'https://www.kb.cz/kurzovni-listek/en/rl/index.x':
    return new Promise((resolve, reject) =>{
        kb().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });
    
    case 'https://www.otpbank.hu/portal/en/Rates/ForeignExchRates':
    return new Promise((resolve, reject) =>{
        otpbank().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });
    
    case 'https://www.changeme.co.il/index.php/%D7%94%D7%96%D7%9E%D7%A0%D7%AA-%D7%9E%D7%98%D7%B4%D7%97':
    return new Promise((resolve, reject) =>{
        changeme().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });
    
    case 'http://bestexchange.co.uk/?q=exchange-rates':
    return new Promise((resolve, reject) =>{
        bestexchange().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });
    
    case 'https://www.raiffeisen.ru/en/currency_rates/#offices':
    return new Promise((resolve, reject) =>{
        raiffeisen().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });
    
    case 'https://www.posb.com.sg/personal/rates-online/foreign-currency-foreign-exchange.page':
    return new Promise((resolve, reject) =>{
        posb().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });
    
    case 'https://portal.banamex.com.mx/c719_004/divisasMetales/es/divisas?xhost=https://www.banamex.com/':
    return new Promise((resolve, reject) =>{
        banamex().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });
    
    case 'https://www.mizuhobank.co.jp/rate/market/quote/index.html':
    return new Promise((resolve, reject) =>{
        mizuhobank().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });
    
    case 'https://www.bfcexchange.co.uk/currency-exchange-rates?atype=exchange&continent=europe#animatedModal':
    return new Promise((resolve, reject) =>{
        bfcexchange().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });
    
    case 'https://cecltd.com/?q=exchange-rates':
    return new Promise((resolve, reject) =>{
        cecltd().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });
    
    case 'http://www.natwest.com/tools/personal/currency_rates/':
    return new Promise((resolve, reject) =>{
        natwest().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });
    
    case 'http://www.netdania.com/quotes/forex-sterling':
    return new Promise((resolve, reject) =>{
        netdania().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });
    
    case 'https://www.ace-fx.com/exchange-rates/':
    return new Promise((resolve, reject) =>{
        acefx().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });
    
    case 'http://www.bankleumi.co.il/vgnprod/shearim.asp?sitePrefix=':
    return new Promise((resolve, reject) =>{
        bankleumi().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });
    
    case 'http://www.sakura-currency.co.jp/roppongi/':
    return new Promise((resolve, reject) =>{
        sakura().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });
    
    case 'http://www.ccsole.com.mx/':
    return new Promise((resolve, reject) =>{
        ccsole().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });
    
    case 'http://www.huspak-exchange.cz/en/exchange-rates/':
    return new Promise((resolve, reject) =>{
        huspak().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });
    
    case 'http://www.alfaprague.cz/web2/?site=1':
    return new Promise((resolve, reject) =>{
        alfaprague().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });
    
    case 'https://www.exchange8.cz/en/#close':
    return new Promise((resolve, reject) =>{
        exchange8().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });
    
    case 'http://www.auraaktiv.cz/exchange-rates.html':
    return new Promise((resolve, reject) =>{
        auraaktiv().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });
    
     case 'http://www.nekazanka-exchange.cz/':
    return new Promise((resolve, reject) =>{
        nekazanka().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });
    
      case 'http://www.goldenexchange.cz/kurzy.php':
    return new Promise((resolve, reject) =>{
        goldenexchange().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });
    
      case 'http://www.provaznickaexchange.cz/novy.php':
    return new Promise((resolve, reject) =>{
        provaznickaexchange().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });
       case 'http://www.cernaruze-exchange.cz/':
    return new Promise((resolve, reject) =>{
        cernaruze().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });
    
       case 'http://www.top-exchange.cz/index.php':
    return new Promise((resolve, reject) =>{
        topexchange().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });
    
       case 'http://www.eurochange.cz/kurzy/':
    return new Promise((resolve, reject) =>{
        eurochange().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });
    
        case 'http://www.changeoffice.wz.cz/kurzy.php':
    return new Promise((resolve, reject) =>{
        changeoffice().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });
    
        case 'https://www.pottchange.com/en/exchange-rates/':
    return new Promise((resolve, reject) =>{
        pottchange().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });
    
        case 'http://www.hanifachange.hu/':
    return new Promise((resolve, reject) =>{
        hanifachange().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });
    
        case 'http://www.handmchange.hu/?uzlet=1':
    return new Promise((resolve, reject) =>{
        handmchangehu().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });
    
        case 'https://jokervaluta.hu/':
    return new Promise((resolve, reject) =>{
        jokervaluta().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });
    
         case 'http://starchange-penzvalto.hu/':
    return new Promise((resolve, reject) =>{
        starchange().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });
    
         case 'http://correctchange.hu/index.php?p=arf':
    return new Promise((resolve, reject) =>{
        correctchange().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });
    
          case 'http://www.adamtravel.hu/':
    return new Promise((resolve, reject) =>{
        adamtravel().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });
    
          case 'http://www.barari.hu/':
    return new Promise((resolve, reject) =>{
        barari().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });
    
            case 'http://www.akkadbros.hu/index.php':
    return new Promise((resolve, reject) =>{
        akkadbros().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });
    
             case 'http://www.iblachange.hu/index.htm':
    return new Promise((resolve, reject) =>{
        iblachange().then(function (data){
        console.log("get data for url: " + url.address );
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            }).catch(function(res){
              console.log(url.address+"\treason => "+ res);
              global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
    });
    
            case 'http://www.kantorchange.hu/':
            return new Promise((resolve, reject) =>{
              kantorchange().then(function (data){
              console.log("get data for url: " + url.address );
                    scrapingNoTable(url,data).then(function (data){
                    resolve(data);
                    });
                  }).catch(function(res){
                    console.log(url.address+"\treason => "+ res);
                    global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
          });
          
          case 'http://balintchange.hu/':
            return new Promise((resolve, reject) =>{
              balintchange().then(function (data){
              console.log("get data for url: " + url.address );
                    scrapingNoTable(url,data).then(function (data){
                    resolve(data);
                    });
                  }).catch(function(res){
                    console.log(url.address+"\treason => "+ res);
                    global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
          });
          
          case 'http://jcmoneychange.com/our-services/exchange-rate/':
            return new Promise((resolve, reject) =>{
              jcmoneychange().then(function (data){
              console.log("get data for url: " + url.address );
                    scrapingNoTable(url,data).then(function (data){
                    resolve(data);
                    });
                  }).catch(function(res){
                    console.log(url.address+"\treason => "+ res);
                    global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
          });
          
          case 'http://asmi.hu/?uzlet=3':
            return new Promise((resolve, reject) =>{
              asmi().then(function (data){
              console.log("get data for url: " + url.address );
                    scrapingNoTable(url,data).then(function (data){
                    resolve(data);
                    });
                  }).catch(function(res){
                    console.log(url.address+"\treason => "+ res);
                    global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
          });
          
          case 'http://bspenzvalto.hu/':
            return new Promise((resolve, reject) =>{
              bspenzvalto().then(function (data){
              console.log("get data for url: " + url.address );
                    scrapingNoTable(url,data).then(function (data){
                    resolve(data);
                    });
                  }).catch(function(res){
                    console.log(url.address+"\treason => "+ res);
                    global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
          });
          
          case 'http://www.centrumchange.hu/':
            return new Promise((resolve, reject) =>{
              centrumchange().then(function (data){
              console.log("get data for url: " + url.address );
                    scrapingNoTable(url,data).then(function (data){
                    resolve(data);
                    });
                  }).catch(function(res){
                    console.log(url.address+"\treason => "+ res);
                    global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
          });
          
           case 'http://dunachange.hu/en/':
            return new Promise((resolve, reject) =>{
              dunachange().then(function (data){
              console.log("get data for url: " + url.address );
                    scrapingNoTable(url,data).then(function (data){
                    resolve(data);
                    });
                  }).catch(function(res){
                    console.log(url.address+"\treason => "+ res);
                    global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
          });
          
          case 'http://users.atw.hu/kaadanchange/':
            return new Promise((resolve, reject) =>{
              kaadanchange().then(function (data){
              console.log("get data for url: " + url.address );
                    scrapingNoTable(url,data).then(function (data){
                    resolve(data);
                    });
                  }).catch(function(res){
                    console.log(url.address+"\treason => "+ res);
                    global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
          });
          
          case 'http://kiralypenzvalto.hu/':
            return new Promise((resolve, reject) =>{
              kiralypenzvalto().then(function (data){
              console.log("get data for url: " + url.address );
                    scrapingNoTable(url,data).then(function (data){
                    resolve(data);
                    });
                  }).catch(function(res){
                    console.log(url.address+"\treason => "+ res);
                    global.Report.failedReportList.push(url.address+"\treason => "+ res);
            });
          });
  }
};





















var lacurrency = function()
{
  return new Promise((resolve, reject) => {
    request('https://lacurrency.com/', function (error, response, html)
    {
        if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('a.table-row').each(function(i, element){
              
                var a = $(this).children('span');
                jsonData[i++] = 
                {
                  currency: a.eq(0).text(),
                  buy: a.eq(4).text(),
                  sell: a.eq(3).text()
                };
            });
            resolve(jsonData);
    });
  });
};

var exchangecz = function()
{
  return new Promise((resolve, reject) => {
    request('https://www.exchange.cz/', function (error, response, html)
    {
      if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            //console.log(html);
            var jsonData = [];
            var i = 0;
            $('table#ratelist').children('tbody').children('tr').each(function(i, element){
                var a = $(this).children('td');
                jsonData[i++] = 
                {
                  currency: a.eq(0).text(),
                  buy: a.eq(2).text(),
                  sell: a.eq(3).text()
                };
            });
            resolve(jsonData);
    });
  });
};

var pnb = function()
{
  return new Promise((resolve, reject) => {
    request('http://www.pnb.com.ph/index.php/personal-banking/foreign-exchange-rates', function (error, response, html)
    {
      if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $("tr[bgcolor=\"#666666\"]").parent().children('tr').each(function(i, element){
                var a = $(this).children();

                jsonData[i++] = 
                {
                  currency: a.eq(0).text(),
                  buy: a.eq(1).text(),
                  sell: a.eq(2).text()
                };
            });
            resolve(jsonData);
    });
  });
};


var xchangeofamerica = function()
{
  return new Promise((resolve, reject) => {
    request('https://www.xchangeofamerica.com/home', function (error, response, html)
    {
      if (error)
        {
          reject("There is a problem to parse");
        }
      if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        
        var jsonData = [];
        var i = 0;
        $('span.currency').parent().each(function(i, element){
            var a = $(this).children();
              jsonData[i++] = 
              {
                currency: a.eq(1).text().trim(),
                buy: a.eq(2).text().trim(),
                sell: a.eq(3).text().trim()
              };
        
            
        });
        resolve(jsonData);
      }
      
    });
  });
};


var csas = function()
{
  return new Promise((resolve, reject) => {
    request('https://www.csas.cz/banka/appmanager/portal/banka?_nfpb=true&_pageLabel=exchangerates_subportal01', function (error, response, html)
    {
      if (error)
        {
          reject("There is a problem to parse");
        }
        var $ = cheerio.load(html);
        var jsonData = [];
        var i = 0;
        $('table.tabular').children('tbody').children('tr').each(function(i, element){
            var a = $(this).children('td');
        
            jsonData[i++] = 
            {
              currency: a.eq(2).text().trim(),
              buy: a.eq(5).text().trim(),
              sell: a.eq(6).text().trim()
            };
        
        });
        resolve(jsonData);
      
    });
  });
};

var kb = function()
{
  return new Promise((resolve, reject) => {
    request('https://www.kb.cz/kurzovni-listek/en/rl/index.x', function (error, response, html)
    {
      if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('div#collapse-card-transactions').children().children('table.exchange-rate-table').children('tbody').children('tr').each(function(i, element){
                var a = $(this).children('td');
            
                jsonData[i++] = 
                {
                  currency: a.eq(0).text().trim(),
                  buy: a.eq(7).text().trim(),
                  sell: a.eq(8).text().trim()
                };
            
            });
            resolve(jsonData);
    });
  });
};

var otpbank = function()
{
  return new Promise((resolve, reject) => {
    request('https://www.otpbank.hu/portal/en/Rates/ForeignExchRates', function (error, response, html)
    {
      if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('div.table-holder').first().children('table').children('tbody').children('tr').each(function(i, element){
                var a = $(this).children('td');
            
                jsonData[i++] = 
                {
                  currency: a.eq(0).text().trim(),
                  buy: a.eq(3).text().trim(),
                  sell: a.eq(4).text().trim()
                };
            
            });
            resolve(jsonData);
    });
  });
};

var changeme = function()
{
  return new Promise((resolve, reject) => {
    request('https://www.changeme.co.il/index.php/%D7%94%D7%96%D7%9E%D7%A0%D7%AA-%D7%9E%D7%98%D7%B4%D7%97', function (error, response, html)
    {
            if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('select.matbeot').children('option').each(function(i, element){
                var a = $(this);
                jsonData[i++] = 
                {
                  currency: a.text().trim(),
                  buy: 0.0,
                  sell: a.val()
                };
            
            });
            resolve(jsonData);
    });
  });
};

var raiffeisen = function()
{
  return new Promise((resolve, reject) => {
    request('https://www.raiffeisen.ru/en/currency_rates/#offices', function (error, response, html)
    {
      if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('div.offices_view').children('.table').children('tbody').children('tr').each(function(i, element){
                var a = $(this).children('td');
            
                jsonData[i++] = 
                {
                  currency: a.eq(0).text().trim(),
                  buy: a.eq(3).text().trim(),
                  sell: a.eq(5).text().trim()
                };
            
            });
            resolve(jsonData);
    });
  });
};

var posb = function()
{
  return new Promise((resolve, reject) => {
    request('https://www.posb.com.sg/personal/rates-online/foreign-currency-foreign-exchange.page', function (error, response, html)
    {
      if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('table.margin-table').children('tbody').children('tr').each(function(i, element){
                var a = $(this).children();
            
                jsonData[i++] = 
                {
                  currency: a.eq(0).text().trim(),
                  buy: a.eq(3).text().trim(),
                  sell: a.eq(2).text().trim()
                };
            
            });
            resolve(jsonData);
    });
  });
};

var banamex = function()
{
  return new Promise((resolve, reject) => {
    request('https://portal.banamex.com.mx/c719_004/divisasMetales/es/divisas?xhost=https://www.banamex.com/', function (error, response, html)
    {
      if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            
            $('table.metalesTable').children('tbody').children('tr').each(function(i, element){
                var a = $(this).children();
            
                jsonData[i++] = 
                {
                  currency: a.eq(0).text().trim()+a.eq(1).text().trim(),
                  buy: a.eq(2).text().trim(),
                  sell: a.eq(3).text().trim()
                };
            
            });
            resolve(jsonData);
    });
  });
};

var mizuhobank = function()
{
  return new Promise((resolve, reject) => {
    request('https://www.mizuhobank.co.jp/rate/market/quote/index.html', function (error, response, html)
    {
      if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            
            $('table.type1').first().children('tbody').children('tr').each(function(i, element){
                var a = $(this).children();
            
                jsonData[i++] = 
                {
                  currency: a.eq(1).text().trim(),
                  buy: a.eq(3).text().trim(),
                  sell: a.eq(2).text().trim()
                };
            
            });
            resolve(jsonData);
    });
  });
};

var bfcexchange = function()
{
  return new Promise((resolve, reject) => {
    request('https://www.bfcexchange.co.uk/currency-exchange-rates?atype=exchange&continent=europe#animatedModal', function (error, response, html) /// need to be complete!
    {
      if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            
            $('div.bfc-currency-exchange-rates-wrapper').children('div.bfc-currency-exchange-rates-row').each(function(i, element){
                var a = $(this);
                
                jsonData[i++] = 
                {
                  currency: a.children("span.bfc-country-img-code-wrapper").children("span.bfc-country-code-name").children("span.bfc-country-ccode").text().trim(),
                  buy: a.children("span.bfc-country-main-buy-wrapper").children("span.bfc-currency-rates-buy").text().trim(),
                  sell: a.children("span.bfc-country-main-sell-wrapper").children("span.bfc-currency-rates-sell").text().trim()
                };
            
            });
            resolve(jsonData);
    });
  });
};

var cecltd = function()
{
  return new Promise((resolve, reject) => {
    request('https://cecltd.com/?q=exchange-rates', function (error, response, html) /// need to be complete!
    {
      if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            
            $('table.views-table').children('tbody').children("tr").each(function(i, element){
                var a = $(this).children("td");
               
                jsonData[i++] = 
                {
                  currency: a.eq(1).text().trim(),
                  buy: a.eq(5).text().trim(),
                  sell: a.eq(6).text().trim()
                };
            
            });
            resolve(jsonData);
    });
  });
};


var natwest = function()
{
  return new Promise((resolve, reject) => {
    request('http://www.natwest.com/tools/personal/currency_rates/', function (error, response, html) /// need to be complete!
    {
      if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            
            $('table.dataTable').first().children('tbody').children("tr").each(function(i, element){
                var a = $(this).children("td");
               
                jsonData[i++] = 
                {
                  currency: a.eq(0).text().trim(),
                  buy: a.eq(1).text().trim(),
                  sell: a.eq(2).text().trim()
                };
            
            });
            resolve(jsonData);
    });
  });
};

var netdania = function()
{
  return new Promise((resolve, reject) => {
    request('http://www.netdania.com/quotes/forex-sterling', function (error, response, html) /// need to be complete!
    {
      if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            
            $('div.nd-ql-tbl-results').children("table").children('tbody').children("tr").each(function(i, element){
                var a = $(this).children("td");
               
                jsonData[i++] = 
                {
                  currency: a.eq(0).text().trim(),
                  buy: a.eq(3).text().trim(),
                  sell: a.eq(4).text().trim()
                };
            
            });
            resolve(jsonData);
    });

  });
};

var bestexchange = function()
{
  return new Promise((resolve, reject) => {
    request('http://bestexchange.co.uk/?q=exchange-rates', function (error, response, html) /// need to be complete!
    {
      if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('table.views-table').children('tbody').children("tr").each(function(i, element){
                var a = $(this).children("td");
                
                jsonData[i++] = 
                {
                  currency: a.eq(1).text().trim(),
                  buy: a.eq(3).text().trim(),
                  sell: a.eq(4).text().trim()
                };
            
            });
            resolve(jsonData);
    });
  });
};

var acefx = function()
{
  return new Promise((resolve, reject) => {
    request('https://www.ace-fx.com/exchange-rates/', function (error, response, html) /// need to be complete!
    {
      if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('div.currency_exchange').children('table').children('tbody').children("tr").each(function(i, element){
                var a = $(this).children("td");
                
                jsonData[i++] = 
                {
                  currency: a.eq(0).text().trim(),
                  buy: a.eq(1).text().trim(),
                  sell: a.eq(2).text().trim()
                };
            });
            resolve(jsonData);
    });
  });
};

var bankleumi = function()
{
  return new Promise((resolve, reject) => {
    var requestOptions  = { encoding: null, method: "GET", uri: "http://www.bankleumi.co.il/vgnprod/shearim.asp?sitePrefix="};
    request(requestOptions, function(error, response, html) {
      if (error)
        {
          reject("There is a problem to parse");
        }
        html = iconv.decode(new Buffer(html), "iso-8859-8");
        var $ = cheerio.load(html);
        var jsonData = [];
        var i = 0;
        $('table[width="570"]').children('tbody').children("tr").each(function(i, element){
            var a = $(this).children("td");
            if (a.eq(5).text().trim() === 'ין יפני')
            {
                jsonData[i++] ={ 
                  currency: a.eq(5).text().trim(),
                  buy: a.eq(1).text().trim()/100,
                  sell: a.eq(0).text().trim()/100
                };
            }
            else
            {
                jsonData[i++] ={ 
                  currency: a.eq(5).text().trim(),
                  buy: a.eq(1).text().trim(),
                  sell: a.eq(0).text().trim()
                };
            }
        });
        resolve(jsonData);
    });
  });
};

var sakura = function()
{
  return new Promise((resolve, reject) => {
    request('http://www.sakura-currency.co.jp/roppongi/', function (error, response, html)
    {
      if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('dl#rate-list').children('dt').each(function(i, element){
                var a = $(this);
                var b = a.next("dd").first().contents().get(0).nodeValue;
                jsonData[i++] = 
                {
                  currency: a.text().trim().replace(/\s|\r\n|\s\r\n|\r\n\s/g,''),
                  buy: b,
                  sell: 0.0
                };
            
            });
            resolve(jsonData);
    });
  });
};

var ccsole = function()
{
  return new Promise((resolve, reject) => {
    request('http://www.ccsole.com.mx/', function (error, response, html)
    {
      if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('table[width="220"]').children("tbody").children("tr").each(function(i, element){
            var a = $(this).children("td");
            var fixedB;
            var fixedS;
            if (a.eq(1).text().trim()[0] === ".")
            {
                fixedB = "0"+a.eq(1).text().trim()
                fixedS = "0"+a.eq(2).text().trim()
            }else
            {
                fixedB = a.eq(1).text().trim()
                fixedS = a.eq(2).text().trim()
            }
            jsonData[i++] = 
            {
              currency: a.eq(3).text().trim(),
              buy: fixedB,
              sell: fixedS
            };
        
        });
            resolve(jsonData);
    });

  });
};

var huspak = function()
{
  return new Promise((resolve, reject) => {
   request('http://www.huspak-exchange.cz/en/exchange-rates/', function (error, response, html)
    {
      if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('table').children("tbody").children("tr").each(function(i, element){
            var a = $(this).children("td");
            var fixed;
            if (a.eq(0).text().trim()[0] === "-")
            {
                fixed = a.eq(0).text().trim().slice(2);
            }else
            {
                fixed = a.eq(0).text().trim()
            }
            jsonData[i++] = 
            {
              currency: fixed,
              buy: a.eq(2).text().trim(),
              sell: a.eq(3).text().trim()
            };
        
        });
            resolve(jsonData);
    });

  });
};

var alfaprague = function()
{
  return new Promise((resolve, reject) => {
   
request('http://www.alfaprague.cz/web2/?site=1', function (error, response, html)
    {
      if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('table[width="550"]').children("tbody").children("tr").each(function(i, element){
            var a = $(this).children("td");

            jsonData[i++] = 
            {
              currency: a.eq(2).text().trim(),
              buy: a.eq(4).text().trim(),
              sell: a.eq(5).text().trim()
            };
        
        });
            resolve(jsonData);
    });


  });
};

var exchange8 = function()
{
  return new Promise((resolve, reject) => {
   
request('https://www.exchange8.cz/en/#close', function (error, response, html)
    {
      if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $("div.exchange-list").children('table').children("tbody").children("tr").each(function(i, element){
            var a = $(this).children("td");

            jsonData[i++] = 
            {
              currency: a.eq(1).text().trim(),
              buy: a.eq(3).text().trim(),
              sell: a.eq(4).text().trim()
            };
        
        });
           resolve(jsonData);
    });


  });
};

var auraaktiv = function()
{
  return new Promise((resolve, reject) => {
   
request('http://www.auraaktiv.cz/exchange-rates.html', function (error, response, html)
    {
      if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('table.listek').children("tbody").children("tr").each(function(i, element){
            var a = $(this).children("td");

            jsonData[i++] = 
            {
              currency: a.eq(2).text().trim(),
              buy: a.eq(4).text().trim(),
              sell: a.eq(5).text().trim()
            };
        
        });
            resolve(jsonData);
    });


  });
};

var nekazanka = function()
{
  return new Promise((resolve, reject) => {
   
request('http://www.nekazanka-exchange.cz/', function (error, response, html)
    {
      if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('table.kurzy').children("tbody").children("tr").each(function(i, element){
            var a = $(this).children("td");

            jsonData[i++] = 
            {
              currency: a.eq(1).text().trim().replace(/\s|1|100|0/gi, ""),
              buy: a.eq(2).text().trim(),
              sell: a.eq(3).text().trim()
            };
        
        });
            resolve(jsonData);
    });



  });
};


var goldenexchange = function()
{
  return new Promise((resolve, reject) => {
   
request('http://www.goldenexchange.cz/kurzy.php', function (error, response, html)
    {
        if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('table.tabulka').children("tbody").children("tr").each(function(i, element){
            var a = $(this).children("td");

            jsonData[i++] = 
            {
              currency: a.eq(2).text().trim(),
              buy: a.eq(4).text().trim(),
              sell: a.eq(5).text().trim()
            };
        
        });
            resolve(jsonData);
    });




  });
};



var provaznickaexchange = function()
{
  return new Promise((resolve, reject) => {
   
request('http://www.provaznickaexchange.cz/novy.php', function (error, response, html)
    {
        if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('table.tabulka').children("tbody").children("tr").each(function(i, element){
            var a = $(this).children("td");

            jsonData[i++] = 
            {
              currency: a.eq(2).text().trim(),
              buy: a.eq(4).text().trim(),
              sell: a.eq(5).text().trim()
            };
        
        });
            resolve(jsonData);
    });





  });
};


var cernaruze = function()
{
  return new Promise((resolve, reject) => {
   

request('http://www.cernaruze-exchange.cz/', function (error, response, html)
    {
        if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('table.kurzy').children("tbody").children("tr").each(function(i, element){
            var a = $(this).children("td");

            jsonData[i++] = 
            {
              currency: a.eq(1).text().trim().replace(/\s|1|100|0/gi, ""),
              buy: a.eq(2).text().trim(),
              sell: a.eq(3).text().trim()
            };
        
        });
            resolve(jsonData);
    });
  });
};


var topexchange = function()
{
  return new Promise((resolve, reject) => {
   


request('http://www.top-exchange.cz/index.php', function (error, response, html)
    {
        if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('table.tabulka').children("tbody").children("tr").each(function(i, element){
            var a = $(this).children("td");

            jsonData[i++] = 
            {
              currency: a.eq(2).text().trim().replace(/\s|1|100|0/gi, ""),
              buy: a.eq(4).text().trim().replace(/,/gi, "."),
              sell: a.eq(5).text().trim().replace(/,/gi, ".")
            };
        
        });
            resolve(jsonData);
    });

  });
};

var eurochange = function()
{
  return new Promise((resolve, reject) => {
   



request('http://www.eurochange.cz/kurzy/', function (error, response, html)
    {
        if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('table.exchangetbl').children("tbody").children("tr").each(function(i, element){
            var a = $(this).children("td");

            jsonData[i++] = 
            {
              currency: a.eq(1).text().trim(),
              buy: a.eq(3).text().trim(),
              sell: a.eq(4).text().trim()
            };
        
        });
            resolve(jsonData);
    });
  });
};

var changeoffice = function()
{
  return new Promise((resolve, reject) => {
request('http://www.changeoffice.wz.cz/kurzy.php', function (error, response, html)
    {
      if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('table[width="400"]').children("tbody").children("tr").each(function(i, element){
            var a = $(this).children("td");

            jsonData[i++] = 
            {
              currency: a.eq(2).text().trim().replace(/\s|\(100\)/gi, ""),
              buy: 0.0,
              sell: a.eq(3).text().trim().replace(/,/gi, ".").replace(/ (100)/gi, "")
            };
        
        });
            resolve(jsonData);
    });

  });
};

var pottchange = function()
{
  return new Promise((resolve, reject) => {
request('https://www.pottchange.com/en/exchange-rates/', function (error, response, html)
    {
        if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('table.pott-rate-table').children("tbody").children("tr").each(function(i, element){
            var a = $(this).children("td");

            jsonData[i++] = 
            {
              currency: a.eq(0).text().trim(),
              buy: a.eq(4).text().trim().replace(/,/gi, "."),
              sell: a.eq(5).text().trim().replace(/,/gi, ".")
            };
        
        });
            resolve(jsonData);
    });

  });
};

var hanifachange = function()
{
  return new Promise((resolve, reject) => {
request('http://www.hanifachange.hu/', function (error, response, html)
    {
        if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('table').children("tbody").children("tr").each(function(i, element){
            var a = $(this).children("td");

            jsonData[i++] = 
            {
              currency: a.eq(1).text().trim(),
              buy: a.eq(3).text().trim().replace(/,/gi, "."),
              sell: a.eq(4).text().trim().replace(/,/gi, ".")
            };
        
        });
            resolve(jsonData);
    });

  });
};


var handmchangehu = function()
{
  return new Promise((resolve, reject) => {
request('http://www.handmchange.hu/?uzlet=1', function (error, response, html)
    {
        if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('table').children("tbody").children("tr").each(function(i, element){
            var a = $(this).children("td");

            jsonData[i++] = 
            {
              currency: a.eq(0).text().trim(),
              buy: a.eq(2).text().trim().replace(/,/gi, "."),
              sell: a.eq(3).text().trim().replace(/,/gi, ".")
            };
        
        });
            resolve(jsonData);
    });

  });
};




var jokervaluta = function()
{
  return new Promise((resolve, reject) => {
request('https://jokervaluta.hu/', function (error, response, html)
    {
        if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('table.table').children("tbody").children("tr").each(function(i, element){
            var a = $(this).children("td");

            jsonData[i++] = 
            {
              currency: a.eq(1).text().trim(),
              buy: a.eq(3).text().trim(),
              sell: a.eq(4).text().trim()
            };
        
        });
            resolve(jsonData);
    });

  });
};

var starchange = function()
{
  return new Promise((resolve, reject) => {
request('http://starchange-penzvalto.hu/', function (error, response, html)
    {
        if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('table').children("tbody").children("tr").each(function(i, element){
            var a = $(this).children("td");

            jsonData[i++] = 
            {
              currency: a.eq(0).text().trim(),
              buy: a.eq(2).text().trim(),
              sell: a.eq(3).text().trim()
            };
        
        });
            resolve(jsonData);
    });

  });
};

var correctchange = function()
{
  return new Promise((resolve, reject) => {
request('http://correctchange.hu/index.php?p=arf', function (error, response, html)
    {
        if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('table.mainpageTable').children("tbody").children("tr").each(function(i, element){
            var a = $(this).children("td");

            jsonData[i++] = 
            {
              currency: a.eq(0).text().trim(),
              buy: a.eq(2).text().trim(),
              sell: a.eq(3).text().trim()
            };
        
        });
            resolve(jsonData);
    });

  });
};


var adamtravel = function()
{
  return new Promise((resolve, reject) => {

request('http://www.adamtravel.hu/', function (error, response, html)
    {
        if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('table').children("tbody").children("tr").each(function(i, element){
            var a = $(this).children("td");

            jsonData[i++] = 
            {
              currency: a.eq(0).text().trim(),
              buy: a.eq(1).text().trim().replace(/\s|Ft/gi, ""),
              sell: a.eq(2).text().trim().replace(/\s|Ft/gi, "")
            };
        
        });
            resolve(jsonData);
    });

  });
};

var barari = function()
{
  return new Promise((resolve, reject) => {

request('http://www.barari.hu/', function (error, response, html)
    {
        if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('table#arfolyamtable').children("tbody").children("tr").each(function(i, element){
            var a = $(this).children("td");

            jsonData[i++] = 
            {
              currency: a.eq(0).text().trim(),
              buy: a.eq(3).text().trim(),
              sell: a.eq(4).text().trim()
            };
        
        });
            resolve(jsonData);
    });

  });
};


var akkadbros = function()
{
  return new Promise((resolve, reject) => {


request('http://www.akkadbros.hu/index.php', function (error, response, html)
    {
        if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('table.datagridmaintable').children("tbody").children("tr").each(function(i, element){
            var a = $(this).children("td");

            jsonData[i++] = 
            {
              currency: a.eq(0).text().trim(),
              buy: a.eq(2).text().trim(),
              sell: a.eq(3).text().trim()
            };
        
        });
            resolve(jsonData);
    });

  });
};

var iblachange = function()
{
  return new Promise((resolve, reject) => {


request('http://www.iblachange.hu/index.htm', function (error, response, html)
    {
        if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('table.MsoNormalTable').children("tbody").children("tr").each(function(i, element){
            var a = $(this).children("td");

            jsonData[i++] = 
            {
              currency: a.eq(1).text().trim(),
              buy: a.eq(2).text().trim().replace(/,/gi, "."),
              sell: a.eq(3).text().trim().replace(/,/gi, ".")
            };
        
        });
            resolve(jsonData);
    });

  });
};

var kantorchange = function()
{
  return new Promise((resolve, reject) => {
request('http://www.kantorchange.hu/', function (error, response, html)
    {
        if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('table').children("tbody").children("tr").each(function(i, element){
            var a = $(this).children("td");

            jsonData[i++] = 
            {
              currency: a.eq(0).text().trim(),
              buy: a.eq(1).text().trim().replace(/,/gi, "."),
              sell: a.eq(2).text().trim().replace(/,/gi, ".")
            };
        
        });
            resolve(jsonData);
    });

  });
};

var balintchange = function()
{
  return new Promise((resolve, reject) => {
request('http://balintchange.hu/', function (error, response, html)
    {
        if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            $('table').children("tbody").children("tr").each(function(i, element){
            var a = $(this).children("td");

            jsonData[i++] = 
            {
              currency: a.eq(0).text().trim(),
              buy: a.eq(2).text().trim().replace(/:/gi, "."),
              sell: a.eq(4).text().trim().replace(/:/gi, ".")
            };
        
        });
            resolve(jsonData);
    });

  });
};

var jcmoneychange = function()
{
  return new Promise((resolve, reject) => {
request('http://jcmoneychange.com/our-services/exchange-rate/', function (error, response, html)
    {
        if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('table.easy-table').children("tbody").children("tr").each(function(i, element){
            var a = $(this).children("td");
            if (a.eq(0).text().trim() !== "")
            {
                jsonData[i++] = 
                {
                  currency: a.eq(0).text().trim().replace(/USA/gi, "USD"),
                  buy: a.eq(2).text().trim(),
                  sell: a.eq(3).text().trim()
                };
            }
        
        });
            resolve(jsonData);
    });

  });
};


var asmi = function()
{
  return new Promise((resolve, reject) => {
request('http://asmi.hu/php/jel.php', function (error, response, html)
    {
            if (error)
            {
              reject("There is a problem to parse");
            }
            var $ = cheerio.load(html);
            var jsonData = [];
            var h = 0;
            $('body').first().each(function(i, element){
                var a = $(this);
                // console.log(a.html());
                var arr = a.html().replace(/<br>/gi, ",");
                var tmp = "";
                var curs = [];
                for (var i = 0; i< arr.length; i++)
                {
                    if (arr[i] !== ",")
                    {
                        tmp += arr[i];
                    }else
                    {
                        curs.push(tmp);
                        tmp ="";
                    }
                }
                
                
                request('http://asmi.hu/php/eladas.php', function (error, response, html)
                {
                  if (error)
                  {
                    reject("There is a problem to parse");
                  }
                    var $ = cheerio.load(html);
                    var jsonData = [];
                    var i = 0;
                    $('body').first().each(function(i, element){
                        var a = $(this);
                        var arr = a.html().replace(/,/gi, ".");
                        arr = arr.replace(/<br>/gi, ",");
                        var tmp = "";
                        var buys = [];
                        for (var i = 0; i< arr.length; i++)
                        {
                            if (arr[i] !== ",")
                            {
                                tmp += arr[i];
                            }else
                            {
                                buys.push(tmp);
                                tmp ="";
                            }
                        }
                        request('http://asmi.hu/php/vetel.php', function (error, response, html)
                        {
                          if (error)
                          {
                            reject("There is a problem to parse");
                          }
                            var $ = cheerio.load(html);
                            var jsonData = [];
                            var i = 0;
                            $('body').first().each(function(i, element){
                                var a = $(this);
                                var arr = a.html().replace(/,/gi, ".");
                                arr = arr.replace(/<br>/gi, ",");
                                var tmp = "";
                                var sales = [];
                                for (var i = 0; i< arr.length; i++)
                                {
                                    if (arr[i] !== ",")
                                    {
                                        tmp += arr[i];
                                    }else
                                    {
                                        sales.push(tmp);
                                        tmp ="";
                                    }
                                }
                                
                                for (var i = 0; i< curs.length; i++)
                                {
                                    jsonData[h++] = 
                                    {
                                      currency: curs[i],
                                      buy: buys[i],
                                      sell: sales[i]
                                    }; 
                                }
                                resolve(jsonData);
                        });
                        
                        });
                
                    });
                
                
            
            });
        });
            
    });

  });
};

var bspenzvalto = function()
{
  return new Promise((resolve, reject) => {
request('http://bspenzvalto.hu/', function (error, response, html)
    {
        if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('table.MsoNormalTable').children("tbody").children("tr").each(function(i, element){
            var a = $(this).children("td");
            if (a.eq(0).text().trim() !== "")
            {
                jsonData[i++] = 
                {
                  currency: a.eq(1).text().trim(),
                  buy: a.eq(2).text().trim().replace(/,/gi, "."),
                  sell: a.eq(3).text().trim().replace(/,/gi, ".")
                };
            }
        
        });
            resolve(jsonData);
    });

  });
};

var centrumchange = function()
{
  return new Promise((resolve, reject) => {
request('http://www.centrumchange.hu/', function (error, response, html)
    {
        if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('table#arfolyamok').children("tbody").children("tr").each(function(i, element){
            var a = $(this).children("td");
            if (a.eq(0).children("img").attr("alt") !== "")
            {
                jsonData[i++] = 
                {
                  currency: a.eq(0).children("img").attr("alt"),
                  buy: a.eq(3).text().trim().replace(/,/gi, "."),
                  sell: a.eq(4).text().trim().replace(/,/gi, ".")
                };
            }
        
        });
            resolve(jsonData);
    });

  });
};

var dunachange = function()
{
  return new Promise((resolve, reject) => {
request('http://dunachange.hu/en/', function (error, response, html)
    {
        if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('table#wp-table-reloaded-id-1-no-1').children("tbody").children("tr").each(function(i, element){
            var a = $(this).children("td");
            if (a.eq(1).text().trim() !== "")
            {
                jsonData[i++] = 
                {
                  currency: a.eq(1).text().trim(),
                  buy: a.eq(3).text().trim().replace(/,/gi, "."),
                  sell: a.eq(4).text().trim().replace(/,/gi, ".")
                };
            }
        
        });
            resolve(jsonData);
    });
  });
};

var kaadanchange = function()
{
  return new Promise((resolve, reject) => {
request('http://users.atw.hu/kaadanchange/', function (error, response, html)
    {
        if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('table.MsoTableWeb1').children("tbody").children("tr").each(function(i, element){
            var a = $(this).children("td");
            if (a.eq(1).text().trim() !== "")
            {
                var buy = a.eq(3).text().trim().replace(/�/gi, "")
                var sell = a.eq(4).text().trim().replace(/�/gi, "")
                jsonData[i++] = 
                {
                  currency: a.eq(1).text().trim(),
                  buy: buy.replace(/,/gi, "."),
                  sell: sell.replace(/,/gi, ".")
                };
            }
        
        });
            resolve(jsonData);
    });
  });
};

var kiralypenzvalto = function()
{
  return new Promise((resolve, reject) => {
request('http://kiralypenzvalto.hu/', function (error, response, html)
    {
        if (error)
        {
          reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('div.style17').parent().parent("tr").parent("tbody").children("tr").each(function(i, element){
            var a = $(this).children("td");
            if (a.eq(1).text().trim() !== "")
            {
                var cur = a.eq(1).text().trim();
                var tmp = "";
                for (var j = 0; j < cur.length; j++)
                {
                    if (cur[j] === "(")
                    {
                        tmp += cur[j+1];
                        tmp += cur[j+2];
                        tmp += cur[j+3];
                    }
                }
                
                jsonData[i++] = 
                {
                  currency: tmp,
                  buy: a.eq(3).text().trim().replace(/,/gi, "."),
                  sell: a.eq(4).text().trim().replace(/,/gi, ".")
                };
            }
        
        });
            resolve(jsonData);
    });
  });
};