const tabletojson = require('tabletojson');
tabletojson.convertUrl('https://cashchanger.co/singapore/mc/iban-express/4', function(tablesAsJson) {
        console.log(tablesAsJson[0]);
})


            