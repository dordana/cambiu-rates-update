var async1 = require("async");
const todoList = function todoList()
{
    //Including the scrafing function
    var scraping = require("./scraping.js").Scraping;
    
    //List of all the url to scrape
    var list_Of_Urls = {
        0:
        {
            address: 'http://bestexchange.co.uk/?q=exchange-rates',
            exchangeId: "",
            chain:"Debenhams",
            name: "",
            numberOfTable : 0,
            parameters: {
                currency: '1',
                buy: 'We Buy',
                sell: 'We Sell'
            }
        },
        1:
        {
            address: 'http://finance.debenhams.com/travel-money/exchange-rates/',
            exchangeId: "",
            chain: 'Debenhams',
            name: "",
            numberOfTable : 0,
            parameters:
            {
                currency: 'Currency',
                buy: 'Standard Buy Rate',
                sell: 'Standard Sell Rate'
            }
        },
        2:
        {
         address: 'https://www.thomasexchangeglobal.co.uk/exchange-rates-check-exchange-rates.php',
            exchangeId: "",
            chain: "Debenhams",
            name: "",
            numberOfTable : 5,
            parameters: {
                currency: '1',
                buy: '2',
                sell: '3'
            }
        },
        3:
        {
            address: 'https://www.pottchange.com/en/exchange-rates/',
            exchangeId: "",
            chain: "",
            name: "pott change",
            numberOfTable : 0,
            parameters: {
                currency: '0',
                buy: 'BUYper Euro',
                sell: 'SELLper Euro'
            }
        }
    };

    //Running
    var Promise = require('promise');
    

        var objMapToArr = require('object-map-to-array');
        objMapToArr(list_Of_Urls,scraping);

        

}

exports.todoList = todoList;