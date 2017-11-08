

var tabletojson = require('tabletojson');
console.log("check1");
tabletojson.convertUrl("https://www.ppfbanka.cz/en/exchange-rates").then(function (tables)
{
        console.log(tables);
});