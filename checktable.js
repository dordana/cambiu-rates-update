

var tabletojson = require('tabletojson');
console.log("check1");
tabletojson.convertUrl("https://www.raiffeisen.ru/en/currency_rates/#offices").then(function (tables)
            {
                console.log("check");
                    console.log(tables);
            });