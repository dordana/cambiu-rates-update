var request = require('request');
var cheerio = require('cheerio');
var Buffer = require('buffer').Buffer;
var iconv  = require('iconv-lite');
    


request('http://www.changeoffice.wz.cz/kurzy.php', function (error, response, html)
    {
        // console.log(html)
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('table[width="400"]').children("tbody").children("tr").each(function(i, element){
            var a = $(this).children("td");

            jsonData[i++] = 
            {
              currency: a.eq(2).text().trim().replace(/\s|\(100\)/gi, ""),
              buy: a.eq(3).text().trim().replace(/,/gi, "."),
              sell: 0.0
            };
        
        });
            console.log(jsonData);
    });
