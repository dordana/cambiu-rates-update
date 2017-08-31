

var tabletojson = require('tabletojson');
console.log("check1");
tabletojson.convertUrl("https://portal.banamex.com.mx/c719_004/divisasMetales/es/divisas?xhost=https://www.banamex.com/").then(function (tables)
            {
                    console.log("check");
                    console.log(tables);
            });