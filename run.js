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

// var CronJob = require('cron').CronJob;
// var todoList = require('./TODO_list.js').todoList;
// var job = new CronJob('40 * * * * 0-6', function() {
//       todoList();
//   },
//   true
// ).start();
console.log("Start working!");
var todoList = require('./TODO_list.js').todoList;
todoList()
console.log("Done!");

