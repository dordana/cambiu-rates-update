var request = require('request');
var cheerio = require('cheerio');
var Buffer = require('buffer').Buffer;
var iconv  = require('iconv-lite');
    


request('http://romeexchange.com/api.php', function (error, response, html)
    {
      if (error)
        {
          // reject("There is a problem to parse");
        }
        // console.log(html);
        var $ = cheerio.load(html);
        var jsonData = [];
        var i = 0;
        $('table.list_table').children('tbody').children('tr').each(function(i, element){
            var a = $(this).children('td');
            // console.log(a.text());
            jsonData[i++] = 
            {
              currency: a.eq(1).text().trim().replace(/EUR\//gi,""),
              buy: a.eq(2).text().trim().replace(/,/gi, "."),
              sell: a.eq(3).text().trim().replace(/,/gi, ".")
            };
        
        });
        console.log(jsonData);
      
    });