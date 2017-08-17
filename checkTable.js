const tabletojson = require('tabletojson');
tabletojson.convertUrl('http://www.luxor-exchange.ro/bucuresti', function(tablesAsJson) {
        console.log(tablesAsJson[0]);
})


            