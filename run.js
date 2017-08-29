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

    // var job = new CronJob('*/30 * * * * 0-6', function() {
        var dateNtime= moment.tz("Asia/Jerusalem").format('DD/MM/YYYY HH:mm:ss');
        console.log("******************************************************************************************************************************************")
        console.log("******************************************************************************************************************************************")
        console.log("********************************************************Start working -"+dateNtime+"************************************************")
        console.log("******************************************************************************************************************************************")
        console.log("******************************************************************************************************************************************")
        var todoList = require('./TODO_list.js').todoList;
        todoList().then(function(data)
        {
            //sendSMSReport(data)
            console.log("Pushed into the daily report!");
            global.dailyReport.push(data);
            resetReport();
            sendEmailReport(createmailreport());
            dateNtime= moment.tz("Asia/Jerusalem").format('DD/MM/YYYY HH:mm:ss');
            console.log("******************************************************************************************************************************************")
            console.log("******************************************************************************************************************************************")
            console.log("**************************************************Finished! - "+dateNtime+"*********************************************************")
            console.log("******************************************************************************************************************************************")
            console.log("******************************************************************************************************************************************")
            
        }); 
    //   },true).start();


// var dailyjob = new CronJob('00 00 09 * * 0-6', function()
// {
//     var rep = createmailreport();
//     sendEmailReport(rep);
// },true).start();  


function sendEmailReport(repText)
{
    var dateNtime= moment.tz("Asia/Jerusalem").format('DD/MM/YYYY');
    console.log("Sending a email to dordanaa@gmail.com");
    var api_key = 'key-eef1b14f1229530c25fadbb64e12c8f6';
    var domain = 'sandbox3fc985a1f4274f558f5239547f7a9c33.mailgun.org';
    var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
    
    var data = 
    {
        from: 'Cambiu - Update rates report <postmaster@sandbox3fc985a1f4274f558f5239547f7a9c33.mailgun.org>',
        to: 'dor@cambiu.com',
        subject: 'Cambiu - Update rates report - '+ dateNtime,
        html: repText
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
    var existelms = [];
    var dateNtime= moment.tz("Asia/Jerusalem").format('DD/MM/YYYY');
    var failedRep = "<html> <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css\" integrity=\"sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M\" crossorigin=\"anonymous\">";
    failedRep += "<h2 style=\"text-align: center;\"><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"http://join.cambiu.com/wp-content/uploads/2017/03/cropped-logo.png\" alt=\"\" width=\"359\" height=\"118\" /></h2><h2 style=\"text-align: center;\"><span style=\"text-decoration: underline;\"><strong>Update rates for "+dateNtime+"</strong></span></h2>";

    for (var i = 0; i< global.dailyReport.length; i++)
    {
        var listOfError = global.dailyReport[i].failedReportList;
        if (Object.keys(listOfError).length === 0)
        {
            failedRep += "<p style=\"text-align: center;\">Everything up to date</p>"; 
        }else
        {
            var objMapToArr = require('object-map-to-array');
            if (failedRep.indexOf("<p style=\"text-align: center;\">There is a problem with the following urls:</p>") === -1)
            {
                failedRep += "<p style=\"text-align: center;\">There is a problem with the following urls:</p>";
            }
            failedRep += "<ol>"
            objMapToArr(listOfError,function(element) {
                if (existelms.indexOf(element) === -1)
                {
                    existelms.push(element);
                    failedRep += "<li>"+element+"</li>";
                }
            });
            failedRep += "</ol>"
            
        }
        failedRep+= "</html>";
    }
    return failedRep;
}