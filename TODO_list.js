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
            numberOfTable : 0,
            parameters: {
                currency: '0',
                buy: 'BUYper Euro',
                sell: 'SELLper Euro'
            }
        }
    };

    //Running
    
    for (var i = 0; i < Object.keys(list_Of_Urls).length; i++ )
    {
        console.log("Start scraping => "+ list_Of_Urls[i].address);
        scraping(list_Of_Urls[i])
    }

}

exports.todoList = todoList;