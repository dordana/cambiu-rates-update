var request = require('request');
var cheerio = require('cheerio');
var Buffer = require('buffer').Buffer;
var iconv  = require('iconv-lite');
    


request('http://kiralypenzvalto.hu/', function (error, response, html)
    {
        if (error)
        {
        //   reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('div.style17').parent().parent("tr").parent("tbody").children("tr").each(function(i, element){
            var a = $(this).children("td");
            if (a.eq(1).text().trim() !== "")
            {
                var cur = a.eq(1).text().trim();
                var tmp = "";
                for (var j = 0; j < cur.length; j++)
                {
                    if (cur[j] === "(")
                    {
                        tmp += cur[j+1];
                        tmp += cur[j+2];
                        tmp += cur[j+3];
                    }
                }
                
                jsonData[i++] = 
                {
                  currency: tmp,
                  buy: a.eq(3).text().trim().replace(/,/gi, "."),
                  sell: a.eq(4).text().trim().replace(/,/gi, ".")
                };
            }
        
        });
            console.log(jsonData);
    });