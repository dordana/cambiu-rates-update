var request = require('request');
var cheerio = require('cheerio');
var Buffer = require('buffer').Buffer;
var iconv  = require('iconv-lite');
    


request('http://balintchange.hu/', function (error, response, html)
    {
        if (error)
        {
          //reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('table').children("tbody").children("tr").each(function(i, element){
            var a = $(this).children("td");

            jsonData[i++] = 
            {
              currency: a.eq(0).text().trim(),
              buy: a.eq(2).text().trim().replace(/:/gi, "."),
              sell: a.eq(4).text().trim().replace(/:/gi, ".")
            };
        
        });
            console.log(jsonData);
    });