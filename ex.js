//var Promise = require('promise');
var cheerio = require('cheerio');
var request = require('request');


var lacurrency = function()
{
  return new Promise((resolve, reject) => {
    request('https://lacurrency.com/', function (error, response, html)
    {
            var $ = cheerio.load(html);
            var jsonData = {};
            var i = 0;
            $('a.table-row').each(function(i, element){
                var a = $(this).children('span');
                jsonData[i++] = 
                {
                  curreny: a.eq(0).text(),
                  buy: a.eq(4).text(),
                  sell: a.eq(3).text()
                };
            })
            resolve(jsonData);
    });
  })
}

lacurrency().then(function (data){
  console.log(data);
  console.log("check");
})

