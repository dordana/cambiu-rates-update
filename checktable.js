

var tabletojson = require('tabletojson');
console.log("check1");
tabletojson.convertUrl("https://www.exchange8.cz/en/#close").then(function (tables)
            {
                    console.log(tables);
            });