var request = require('request');
var cheerio = require('cheerio');


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
            console.log(jsonData);
    });
