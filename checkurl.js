var request = require('request');
var cheerio = require('cheerio');


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
            console.log(jsonData);
    });
