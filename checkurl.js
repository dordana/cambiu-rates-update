var request = require('request');
var cheerio = require('cheerio');
var Buffer = require('buffer').Buffer;
var iconv  = require('iconv-lite');
    


var requestOptions  = { encoding: null, method: "GET", uri: "http://www.bankleumi.co.il/vgnprod/shearim.asp?sitePrefix="};
    request(requestOptions, function(error, response, html) {
      if (error)
        {
        //   reject("There is a problem to parse");
        }
        html = iconv.decode(new Buffer(html), "iso-8859-8");
        var $ = cheerio.load(html);
        var jsonData = [];
        var i = 0;
        $('table[width="570"]').children('tbody').children("tr").each(function(i, element){
            var a = $(this).children("td");
            if (a.eq(5).text().trim() === 'ין יפני')
            {
                jsonData[i++] ={ 
                  currency: a.eq(5).text().trim(),
                  buy: a.eq(1).text().trim()/100,
                  sell: a.eq(0).text().trim()/100
                };
            }
            else
            {
                jsonData[i++] ={ 
                  currency: a.eq(5).text().trim(),
                  buy: a.eq(1).text().trim(),
                  sell: a.eq(0).text().trim()
                };
            }
        });
        console.log(jsonData);
    });