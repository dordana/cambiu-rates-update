

var tabletojson = require('tabletojson');
console.log("check1");
tabletojson.convertUrl("https://www.otpbank.hu/portal/en/Rates/ForeignExchRates").then(function (tables)
            {
                console.log("check");
                    console.log(tables);
            });