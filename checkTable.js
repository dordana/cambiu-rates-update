var request = require('request');
var cheerio = require('cheerio');


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
            console.log(jsonData);
    });