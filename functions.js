var request = require('request');
var cheerio = require('cheerio');

exports.returnFunc = function returnFunc(url)
{
  if (url === 'https://lacurrency.com/')
  {
    console.log("check");
    return lacurrency;
  }else if (url === 'https://buy.travelex.com/za/RateHistory?NoMobileRedirect=true?size=normal&referrerUrl=http://www.travelex.co.za/ZA/Foreign-Currency/Rates/Currency-Exchange-Rates/')
  {
    return travelex;
  }else if (url === 'https://www.xchangeofamerica.com/home')
  {
    return xchangeofamerica;
  }
}

var lacurrency = function()
{
  request('https://lacurrency.com/', function (error, response, html)
  {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      
      var jsonData = {};
      var i = 0;
      $('a.table-row').each(function(i, element){
          var a = $(this).children('span');
          jsonData[i++] = 
          {
            curreny: a.eq(0).text(),
            buy: a.eq(4).text(),
            sell: a.eq(3).text()
          };
          
      })
      
    }
    return jsonData;
  });
}

var travelex = function()
{
   request('http://www.americanexpressforex.co.za/exchange-rates/', function (error, response, html)
  {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      
      var jsonData = {};
      var i = 0;
      $('div.row').each(function(i, element){
          var a = $(this).children();
          jsonData[i++] = 
          {
            curreny: a.eq(1).children().text(),
            buy: a.eq(2).text().replace(/(\r\n|\n|\r|\s)/gm,""),
            sell: a.eq(3).children().text()
          };
          
      })
      
    }
    console.log(jsonData);
  });
}

var xchangeofamerica = function()
{
   request('https://www.xchangeofamerica.com/home', function (error, response, html)
  {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      
      var jsonData = {};
      var i = 0;
      $('span.currency').parent().each(function(i, element){
          var a = $(this).children();
            jsonData[i++] = 
            {
              curreny: a.eq(1).text().replace(/(\r\n|\n|\r|\s)/gm,""),
              buy: a.eq(2).text().replace(/(\r\n|\n|\r|\s)/gm,""),
              sell: a.eq(3).text().replace(/(\r\n|\n|\r|\s)/gm,"")
            };
      
          
      })
      
    }
    console.log(jsonData);
  });
}
 travelex();