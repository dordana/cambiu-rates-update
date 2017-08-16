var request = require('request');
var cheerio = require('cheerio');
var jsonData = {};

var returnFunc = function returnFunc(url)
{
  if (url === 'https://lacurrency.com/')
  {
    console.log("check");
    return lacurrency();
  }
}

var lacurrency = function()
{
  request('https://lacurrency.com/', function (error, response, html)
  {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      
      
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


