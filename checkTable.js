const tabletojson = require('tabletojson');
tabletojson.convertUrl('https://www.pottchange.com/en/exchange-rates/', function(tablesAsJson) {
        console.log(tablesAsJson[0]);
})


            