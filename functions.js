var request = require('request');
var cheerio = require('cheerio');
var Promise = require("promise");
var scrapingNoTable = require("./scraping.js").ScrapingNoTable;




exports.scrapeByUrl = function scrapeByUrl(url)
{
  switch (url.address)
  {
    
    case 'https://lacurrency.com/':
    return new Promise((resolve, reject) =>{
        lacurrency().then(function (data){
            scrapingNoTable(url,data).then(function (data){
              resolve(data);
            });
          });
    });
    
    case 'https://www.xchangeofamerica.com/home':
    return new Promise((resolve, reject) =>{
        xchangeofamerica().then(function (data){
        
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            });
    });
    
    
    case 'https://www.exchange.cz/':
    return new Promise((resolve, reject) =>{
        exchangecz().then(function (data){
        
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            });
    });  
    
    case 'http://www.pnb.com.ph/index.php/personal-banking/foreign-exchange-rates':
    return new Promise((resolve, reject) =>{
        pnb().then(function (data){
        
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            });
    }); 
    
    case 'https://bcrmobileapp.24banking.ro/bcrmobileapp/v3/anonymousServices.do?event=getBaseFx':
    return new Promise((resolve, reject) =>{
        bcr().then(function (data){
        
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            });
    }); 
    
    case 'https://www.csas.cz/banka/appmanager/portal/banka?_nfpb=true&_pageLabel=exchangerates_subportal01':
    return new Promise((resolve, reject) =>{
        csas().then(function (data){
        
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            });
    });
    
    case 'https://www.kb.cz/kurzovni-listek/en/rl/index.x':
    return new Promise((resolve, reject) =>{
        kb().then(function (data){
        
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            });
    });
    
    case 'https://www.otpbank.hu/portal/en/Rates/ForeignExchRates':
    return new Promise((resolve, reject) =>{
        otpbank().then(function (data){
        
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            });
    });
    
    case 'https://www.changeme.co.il/index.php/%D7%94%D7%96%D7%9E%D7%A0%D7%AA-%D7%9E%D7%98%D7%B4%D7%97':
    return new Promise((resolve, reject) =>{
        changeme().then(function (data){
        
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            });
    });
    
    case 'https://www.raiffeisen.ru/en/currency_rates/#offices':
    return new Promise((resolve, reject) =>{
        raiffeisen().then(function (data){
        
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            });
    });
    
    case 'https://www.posb.com.sg/personal/rates-online/foreign-currency-foreign-exchange.page':
    return new Promise((resolve, reject) =>{
        posb().then(function (data){
        
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            });
    });
    
    case 'https://portal.banamex.com.mx/c719_004/divisasMetales/es/divisas?xhost=https://www.banamex.com/':
    return new Promise((resolve, reject) =>{
        banamex().then(function (data){
        
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            });
    });
    
    case 'https://www.mizuhobank.co.jp/rate/market/quote/index.html':
    return new Promise((resolve, reject) =>{
        mizuhobank().then(function (data){
        
              scrapingNoTable(url,data).then(function (data){
              resolve(data);
              });
            });
    });
  }
};





















var lacurrency = function()
{
  return new Promise((resolve, reject) => {
    request('https://lacurrency.com/', function (error, response, html)
    {
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

var bcr = function()
{
  return new Promise((resolve, reject) => {
    request('https://bcrmobileapp.24banking.ro/bcrmobileapp/v3/anonymousServices.do?event=getBaseFx', function (error, response, html)
    {
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            var a = JSON.parse($.text())["fx"];
            // console.log(a);
            for (var x = 0; x < a.length; x++)
            {
                jsonData[i++] = 
                {
                  currency: a[x].currency,
                  buy: a[x].exchangeRate["buy"],
                  sell: a[x].exchangeRate["sell"]
                };
            }
           
            resolve(jsonData);
    });
  });
};

var csas = function()
{
  return new Promise((resolve, reject) => {
    request('https://www.csas.cz/banka/appmanager/portal/banka?_nfpb=true&_pageLabel=exchangerates_subportal01', function (error, response, html)
    {
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
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('div.table-holder').first().children('table').children('tbody').children('tr').each(function(i, element){
                var a = $(this).children('td');
            
                jsonData[i++] = 
                {
                  currency: a.eq(0).text().trim(),
                  buy: a.eq(3).text().trim(),
                  sell: a.eq(4).text().trim(),
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
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('select.matbeot').children('option').each(function(i, element){
                var a = $(this);
                jsonData[i++] = 
                {
                  currency: a.text().trim(),
                  buy: a.val(),
                  sell: 0.0
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
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('div.offices_view').children('.table').children('tbody').children('tr').each(function(i, element){
                var a = $(this).children('td');
            
                jsonData[i++] = 
                {
                  currency: a.eq(0).text().trim(),
                  buy: a.eq(3).text().trim(),
                  sell: a.eq(5).text().trim(),
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
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('table.margin-table').children('tbody').children('tr').each(function(i, element){
                var a = $(this).children();
            
                jsonData[i++] = 
                {
                  currency: a.eq(0).text().trim(),
                  buy: a.eq(3).text().trim(),
                  sell: a.eq(2).text().trim(),
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
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            
            $('table.metalesTable').children('tbody').children('tr').each(function(i, element){
                var a = $(this).children();
            
                jsonData[i++] = 
                {
                  currency: a.eq(0).text().trim()+a.eq(1).text().trim(),
                  buy: a.eq(2).text().trim(),
                  sell: a.eq(3).text().trim(),
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
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            
            $('table.type1').first().children('tbody').children('tr').each(function(i, element){
                var a = $(this).children();
            
                jsonData[i++] = 
                {
                  currency: a.eq(1).text().trim(),
                  buy: a.eq(3).text().trim(),
                  sell: a.eq(2).text().trim(),
                };
            
            });
            resolve(jsonData);
    });
  });
};