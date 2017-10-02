var request = require('request');
var cheerio = require('cheerio');
var Buffer = require('buffer').Buffer;
var iconv  = require('iconv-lite');
var urljson = require('urljson');


request('https://www.amazon.com/s/ref=sr_nr_p_36_5?rnid=2491154011&keywords=samsung+galaxy+note+8+case&fst=p90x%3A1&rh=n%3A2335752011%2Cn%3A2407760011%2Cn%3A3081461011%2Ck%3Asamsung+galaxy+note+8+case%2Cp_85%3A2470955011%2Cp_72%3A2661618011&qid=1506862373&low-price=5&high-price=15', function (error, response, html)
    {
      if (error)
        {
          // reject("There is a problem to parse");
        }
            var $ = cheerio.load(html);
            var jsonData = [];
            var i = 0;
            $('ul#s-results-list-atf').children("li.s-result-item").each(function(i, element){

              var a = $(this).attr("data-asin");
              console.log(a);

            });
  
            // console.log(jsonData);
    });