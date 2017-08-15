const tabletojson = require('tabletojson');
tabletojson.convertUrl('http://www.valutare.ro/preluare-curs-valutar/curs-valutar-bnr-grafic.html?c=white&cc=EUR-USD-GBP-CHF&a=&s=sans-serif', function(tablesAsJson) {
        console.log(tablesAsJson[0]);
})


            