var request = require('request');
var cheerio = require('cheerio');
var Buffer = require('buffer').Buffer;
var iconv  = require('iconv-lite');
var urljson = require('urljson');

console.log("hello333");
  request('http://www.provaznickaexchange.cz/novy.php', function (error, response, html)
    {
      console.log("hello");
      console.log(html)
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
            $('table.tabulka').children("tbody").children("tr").each(function(i, element){
            var a = $(this).children("td");

            jsonData[i++] = 
            {
              currency: a.eq(2).text().trim(),
              buy: a.eq(4).text().trim(),
              sell: a.eq(5).text().trim()
            };
        
        });
            console.log(jsonData);
    });
    
    console.log("hello2");