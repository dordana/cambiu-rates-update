var request = require('request');
var cheerio = require('cheerio');
var Buffer = require('buffer').Buffer;
var iconv  = require('iconv-lite');
var urljson = require('urljson');


 request('https://www.posb.com.sg/personal/rates-online/foreign-currency-foreign-exchange.page', function (error, response, html)
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
            $('table.tbl-primary').children('tbody').children('tr').each(function(i, element){
                var a = $(this).children();
            
                jsonData[i++] = 
                {
                  currency: a.eq(0).text().trim(),
                  buy: a.eq(3).text().trim(),
                  sell: a.eq(2).text().trim()
                };
            
            });
            console.log(jsonData);
    });