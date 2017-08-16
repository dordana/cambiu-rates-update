const tabletojson = require('tabletojson');
tabletojson.convertUrl('https://news.ycombinator.com/', function(tablesAsJson) {
        console.log(tablesAsJson[0]);
})


            