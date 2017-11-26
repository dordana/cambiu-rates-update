var request = require('request');
var cheerio = require('cheerio');
var Buffer = require('buffer').Buffer;
var iconv  = require('iconv-lite');
var urljson = require('urljson');


 request('https://portal.banamex.com.mx/c719_004/divisasMetales/es/divisas?xhost=https://www.banamex.com/', function (error, response, html)
    {
      if (error)
        {
          // reject("There is a problem to parse");
        }
            if (html){
          var $ = cheerio.load(html);
        }else{
          // reject("There is a problem to parse this site");
        }
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
            console.log(jsonData);
    });