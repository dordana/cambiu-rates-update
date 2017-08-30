var request = require('request');
var cheerio = require('cheerio');


request('https://www.changeme.co.il/index.php/%D7%94%D7%96%D7%9E%D7%A0%D7%AA-%D7%9E%D7%98%D7%B4%D7%97', function (error, response, html)
    {
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('select.matbeot').children('option').each(function(i, element){
                var a = $(this);
                jsonData[i++] = 
                {
                  currency: a.text().trim(),
                  buy: a.val(),
                  sell: 0.0
                };
            
            });
            console.log(jsonData);
    });
