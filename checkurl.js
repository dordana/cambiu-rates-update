var request = require('request');
var cheerio = require('cheerio');
var Buffer = require('buffer').Buffer;
var iconv  = require('iconv-lite');
    


request('http://jcmoneychange.com/our-services/exchange-rate/', function (error, response, html)
    {
        if (error)
        {
          //reject("There is a problem to parse");
        }
        try {
          cheerio.load("sdsdsdd")
        } catch (err) {
            console.log(err);
        }
            console.log("hey");
        
           
            // var jsonData = [];
            // var i = 0;
            // $('table.easy-table').children("tbody").children("tr").each(function(i, element){
            // var a = $(this).children("td");
            // if (a.eq(0).text().trim() !== "")
            // {
            //     jsonData[i++] = 
            //     {
            //       currency: a.eq(0).text().trim().replace(/USA/gi, "USD"),
            //       buy: a.eq(2).text().trim(),
            //       sell: a.eq(3).text().trim()
            //     };
            // }
        
        // });
        //     console.log(jsonData);
    });