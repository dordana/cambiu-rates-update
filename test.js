    var api_key = 'key-eef1b14f1229530c25fadbb64e12c8f6';
    var domain = 'sandbox3fc985a1f4274f558f5239547f7a9c33.mailgun.org';
    var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
    
    var data = 
    {
        from: 'Cambiu - Update rates report <postmaster@sandbox3fc985a1f4274f558f5239547f7a9c33.mailgun.org>',
        to: 'dor@cambiu.com',
        subject: 'Cambiu - Update rates report',
        html: "<h1>dsfdsf</h1>"
    };

        mailgun.messages().send(data);