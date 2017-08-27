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
var emailtemp = "<p style=\"text-align: center;\"><strong><img src=\"http://join.cambiu.com/wp-content/uploads/2017/03/cropped-logo.png\" alt=\"\" width=\"304\" height=\"100\" /></strong></p><p style=\"text-align: center;\">&nbsp;</p><h3 style=\"text-align: center;\"><span style=\"text-decoration: underline;\"><strong>Update rates - Daily report for dailymail.date</strong></span></h3><p style=\"text-align: center;\">Average of Success: dailymail.AverageSuccess&nbsp;</p><p style=\"text-align: center;\">Average of Failure: dailymail.AverageFailure&nbsp;</p><p style=\"text-align: center;\">&nbsp;</p>"

var CronJob = require('cron').CronJob;

    var job = new CronJob('*/15 * * * * 0-6', function() {
        var dateNtime= moment.tz("Asia/Jerusalem").format('DD/MM/YYYY HH:mm:ss');
        console.log("******************************************************************************************************************************************")
        console.log("******************************************************************************************************************************************")
        console.log("********************************************************Start working -"+dateNtime+"************************************************")
        console.log("******************************************************************************************************************************************")
        console.log("******************************************************************************************************************************************")
        var todoList = require('./TODO_list.js').todoList;
        todoList().then(function(data)
        {
            sendSMSReport(data)
            console.log("Pushed into the daily report!");
            global.dailyReport.push(data);
            resetReport();
            dateNtime= moment.tz("Asia/Jerusalem").format('DD/MM/YYYY HH:mm:ss');
            console.log("******************************************************************************************************************************************")
            console.log("******************************************************************************************************************************************")
            console.log("**************************************************Finished! - "+dateNtime+"*********************************************************")
            console.log("******************************************************************************************************************************************")
            console.log("******************************************************************************************************************************************")
            
        }); 
      },true).start();


var dailyjob = new CronJob('00 00 09 * * 0-6', function()
{
    createmailreport();
    sendEmailReport();
},true).start();  


function sendEmailReport()
{
    var dateNtime= moment.tz("Asia/Jerusalem").format('DD/MM/YYYY');
    console.log("Sending a email to dordanaa@gmail.com");
    var api_key = 'key-eef1b14f1229530c25fadbb64e12c8f6';
    var domain = 'sandbox3fc985a1f4274f558f5239547f7a9c33.mailgun.org';
    var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
    
    var data = 
    {
        from: 'Cambiu - Update rates report <postmaster@sandbox3fc985a1f4274f558f5239547f7a9c33.mailgun.org>',
        to: 'dordanaa@gmail.com',
        subject: 'Cambiu - Update rates report - '+ dateNtime,
        html: emailtemp
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

function createmailreport()
{
    var dateNtime= moment.tz("Asia/Jerusalem").format('DD/MM/YYYY');
    var sumSuccess = 0;
    var sumFailed = 0;
    for (var i = 0; i< global.dailyReport.length; i++)
    {
        sumSuccess += global.dailyReport[i].numberOfSuccess;
        sumFailed += global.dailyReport[i].numberOfFailed;
    }
    emailtemp=emailtemp.replace("dailymail.date",dateNtime);
    emailtemp=emailtemp.replace("dailymail.AverageSuccess",sumSuccess/global.dailyReport.length);
    emailtemp=emailtemp.replace("dailymail.AverageFailure",sumFailed/global.dailyReport.length);
    
}