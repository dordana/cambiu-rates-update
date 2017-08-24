var request = require('request');
var cheerio = require('cheerio');
var Promise = require("promise");
var scrapingNoTable = require("./scraping.js").ScrapingNoTable;
exports.returnFunc = function returnFunc(url)
{
  if (url.address === 'https://lacurrency.com/')
  {
    return new Promise((resolve, reject) =>{
        lacurrency().then(function (data){
          
            scrapingNoTable(url,data).then(function (data){
            resolve();
            });
          });
    });
  }else if (url.address === 'https://www.xchangeofamerica.com/home')
  {
    return new Promise((resolve, reject) =>{
        xchangeofamerica().then(function (data){
        
              scrapingNoTable(url,data).then(function (data){
              resolve();
              });
            });
    });
  }
}

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
