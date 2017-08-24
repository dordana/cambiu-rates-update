/*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    |
│    │    │    │    │    └ day of week (0 - 6)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)
*/
//CronJob(cronTime, callback, [args], [context], [repeating = true])
const acc = 'AC30f9cba26999974ebfc6a3bac2cf82b7';
const id = '03365315d1ca59368bc7b3b633bb801d';
const   client = require("twilio")(acc,id),
        moment = require('moment-timezone');
global.dailyReport = [];

var CronJob = require('cron').CronJob;

    var job = new CronJob('*/10 * * * * 0-6', function() {
        console.log("Start working!");
        var todoList = require('./TODO_list.js').todoList;
        todoList().then(function(data)
        {
            sendSMSReport(data)
            console.log("Finished!")
            console.log("Pushed into the daily report!");
            global.dailyReport.push(data);
            resetReport();
        }); 
      },true).start();


var dailyjob = new CronJob('00 00 09 * * 0-6', function()
{
    sendEmailReport();
},true).start();  



function sendEmailReport()
{
    var dateNtime= moment.tz("Asia/Jerusalem").format('DD/MM/YYYY HH:mm:ss');
    console.log("Sending a email to dordanaa@gmail.com");
    var api_key = 'key-eef1b14f1229530c25fadbb64e12c8f6';
    var domain = 'sandbox3fc985a1f4274f558f5239547f7a9c33.mailgun.org';
    var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
    
    var data = 
    {
        from: 'Cambiu - Update rates report <postmaster@sandbox3fc985a1f4274f558f5239547f7a9c33.mailgun.org>',
        to: 'dordanaa@gmail.com',
        subject: 'Cambiu - Update rates report',
        text: ''//need to fill in
    };
    
    mailgun.messages().send(data, function (error, body) {
        if (error)
        {
            console.log("Error- email");
        }
        else{
            console.log(body);
        }
        
    });

}

function resetReport()
{
   global.Report =
        {
            failedReportList: [],
            numberOfSuccess: 0,
            numberOfFailed: 0,
            date: ""
        } 
}
function sendSMSReport(Report)
{
    var dateNtime= moment.tz("Asia/Jerusalem").format('DD/MM/YYYY HH:mm:ss');
    
    ///sending a report
    console.log("Sending a message to +972549325932");
    client.messages.create
    ({
        to: "+972549325932",
        from: "+17868863180",
        body: ' \r\n['+dateNtime+']\r\n *Update report*\r\n' + 'Number of success: ' + Report.numberOfSuccess  + '\r\nNumber of failed: ' + Report.numberOfFailed
    });
}
