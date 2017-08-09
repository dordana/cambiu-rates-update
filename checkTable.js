const tabletojson = require('tabletojson');
tabletojson.convertUrl('https://www.thomasexchangeglobal.co.uk/exchange-rates-check-exchange-rates.php', function(tablesAsJson) {
        console.log(tablesAsJson[5]);
})

