var request = require('request');
var cheerio = require('cheerio');
var Buffer = require('buffer').Buffer;
var iconv  = require('iconv-lite');
var urljson = require('urljson');


  request('https://www.ppfbanka.cz/en/exchange-rates', function (error, response, html)
    {
        if (error)
        {
          // reject("There is a problem to parse");
        }
        if (html){
          var $ = cheerio.load(html);
        }else{
          return "There is a problem to parse this site";
        }
        var jsonData = [];
        var i = 0;
        $('table.exchange-rates').children("tbody").children("tr").each(function(i, element){
        var a = $(this).children("td");

        jsonData[i++] = 
        {
          currency: a.eq(0).text().trim(),
          buy: a.eq(4).text().trim(),
          sell: a.eq(5).text().trim()
        };
        
        });
            console.log(jsonData);
    });
 