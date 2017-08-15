var async1 = require("async");
function UrlClass(address,exchangeId,chain,name,numberOfTable,currency,buy,sell)
{
    this.address = address;
    this.exchangeId = exchangeId;
    this.chain = chain;
    this.name = name;
    this.numberOfTable = numberOfTable;
    this.currency = currency
    this.sell = sell;
    this.buy = buy;
}



const todoList = function todoList()
{
    //Including the scrafing function
    var scraping = require("./scraping.js").Scraping;
    var urlsToScrape = [];
    // urlsToScrape.push(new UrlClass('http://bestexchange.co.uk/?q=exchange-rates',"","Debenhams","",0,'1','We Buy','We Sell'));
    // urlsToScrape.push(new UrlClass('http://finance.debenhams.com/travel-money/exchange-rates/',"","Debenhams","",0,'Currency','Standard Buy Rate','Standard Sell Rate'));
    // urlsToScrape.push(new UrlClass('https://www.pottchange.com/en/exchange-rates/',"","","pott change",0,'0','BUYper Euro','SELLper Euro'));
    // urlsToScrape.push(new UrlClass('http://interafrica.webalytics.co.za/customcontent/Rates.php',"","inter africa","",0,'Currency','Buy Rate','Sell Rate'));
    // urlsToScrape.push(new UrlClass('http://www.mastercurrency.co.za/rates.aspx',"","","master currency",0,'Code','We Buy','We Sell'));
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
    urlsToScrape.push(new UrlClass('http://www.luxor-exchange.ro/bucuresti',"","luxor","",0,'1','2','3'));


    //Running
        var objMapToArr = require('object-map-to-array');
        objMapToArr(urlsToScrape,scraping);

        

}

exports.todoList = todoList;