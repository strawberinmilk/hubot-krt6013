'use strict';
//const directory = "/home/ubuntu/workspace/myprogram/data/"
const directory = "/home/rinkei/program/hubot/data/"
let fs = require('fs');

/*
var cron;
cron = require('cron').CronJob;
*/

function clock() {
    let weektemp = ["(日)", "(月)", "(火)", "(水)", "(木)", "(金)", "(土)"]
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1
    let day = now.getDate();
    let week = weektemp[now.getDay()];
    let hours = zero(now.getHours());
    let minutes = zero(now.getMinutes())
    let seconds = zero(now.getSeconds());
    return hours + ":" + minutes + ":" +seconds
}
function zero(num) {
    let ans
    if (num < 10) {
        ans = "0" + num
    } else {
        ans = num
    }
    return ans;
}
////////////////////////////////////////////////////////////////////////////////////////
let cron = require('cron').CronJob
module.exports = (robot) => {

    robot.hear(/hello/i, (msg) => {
        const username = msg.message.user.name;
        let time = clock()
        //msg.send("@" + username + " コニチワ"+"\r\nツイート日時:"+clock());
        msg.reply(" コニチワ"+"\r\nツイート日時:"+clock());
    });

    robot.hear(/マスタテにクソリプ/i, (msg) => {
        const username = msg.message.user.name;
        msg.send("@masutate_nix 自動クソリプのしけんだよ"+"\r\nツイート日時:"+clock());
    });

let pakutsuinumber = []
    // cronJobの引数は、秒・分・時間・日・月・曜日の順番
    new cron('0 5,15,25,35,45,55 * * * *', function() {
//    new cron('* * * * * *', function() {
    const pakutsuitemp = fs.readFileSync(directory + 'pakutsui.txt', 'utf8');
    let temp = pakutsuitemp.split("改行改行改行");
    let msg
    return send('twitter',msg, temp[Math.floor(Math.random() * temp.length)]);
  }).start();


    robot.hear(/5000/i, (msg) => {
    const username = msg.message.user.name;
    msg.send("@"+username+" 5000兆円欲しい！ \r\n https://twitter.com/krt6013/status/883678198449422336/photo/1"+"\r\nツイート日時:"+clock());
    });


    robot.hear(/爆発しろ/i, (msg) => {
        const tmp = msg.message.text;
        const temp = tmp.split("爆発しろ")
        msg.send(temp[0]+"が爆発しました");
    });


//    robot.hear(/クソリプ/i, (msg) => {
    robot.respond(/クソリプ/i, (msg) => {
    console.log("a")
    const kusoriputemp = fs.readFileSync(directory + 'kusoripu.txt', 'utf8');
    const kusoriputmp = kusoriputemp.split("改行改行改行");
    const kusoriputmp2 = kusoriputmp[Math.floor(Math.random() * kusoriputmp.length)]
    const kusoripu = kusoriputmp2.split("@")
    const sendtotemp = msg.message.text;
    const sendto = sendtotemp.split("クソリプ ");
    console.log("b")
    return send('twitter',msg,kusoripu[0]+" @"+sendto[1]+" "+kusoripu[1]);
    });

        robot.hear(/test1/i, (msg) => {
        const username = msg.message.user.name;
        console.log("-----------------------------------------------------------------------------------")
        console.log(msg)
        console.log("-----------------------------------------------------------------------------------")
        let time = clock()
        return send('twitter',msg," テストコマンド動作しました。"+"\r\nツイート日時:"+clock());
    });

    robot.hear(/test2/i, (msg) => {
    const username = msg.message.user.name;
    console.log("-----------------------------------------------------------------------------------")
    console.log(msg)
    console.log("-----------------------------------------------------------------------------------")
    let time = clock()
    let tmp
    return send('twitter',msg,"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"+"\r\nツイート日時:"+clock());
    });


    var send = function (channel,msg,text) {
        if(text.length < 141){
        return robot.send({
            room: channel
        }, text);
        }else{
            console.log(text)
            console.log(text.length)
            console.log(msg)
            if(msg === undefined){
        return robot.send({
            room: channel
        }, "140文字を超える文字列が生成されました。"+"\r\nツイート日時:"+clock());
            }else{
        return msg.reply({
            room: channel
        }, "140文字を超える文字列が生成されました。"+"\r\nツイート日時:"+clock());
            }
        }
        console.log(text)
    };
/*
    // cronJobの引数は、秒・分・時間・日・月・曜日の順番
    new cron('* * * * * *', function() {
    return send('twitter',"", "テスト"+"\r\nツイート日時:"+clock());
  }).start();
*/

/*
    var send = function (channel, msg) {
        return robot.send({
            room: channel
        }, msg);
    };

    return send('#jr関東_遅延情報', temp);
*/


/////////////////////////追記/////////////////////////////
    // cronJobの引数は、秒・分・時間・日・月・曜日の順番
    new cron('0 0 0 * * *', function() {
    return send('twitter',"", "よるほー");
  }).start();

    // cronJobの引数は、秒・分・時間・日・月・曜日の順番
    new cron('0 0 3 * * *', function() {
    return send('twitter',"", "午̷̖̺͈̆͛͝前̧̢̖̫̊3̘̦時̗͡の̶̛̘̙̤̙̌̉͢い̷゙̊̈̓̓̅ば̬̬̩͈̊͡ら゙̜̩̹ぎ̫̺̓ͣ̕͡げ̧̛̩̞̽ん゙̨̼̗̤̂̄");
  }).start();

      new cron('0 30 3 * * *', function() {
    return send('twitter',"", "ｻﾝｼﾞﾊﾝ!");
  }).start();

      new cron('0 34 3 * * *', function() {
    return send('twitter',"", "なんでや阪神関係ないやろ");
  }).start();

    // cronJobの引数は、秒・分・時間・日・月・曜日の順番
    new cron('0 0 15 * * *', function() {
    return send('twitter',"", "午̷̖̺͈̆͛͝後̧̢̖̫̊3̘̦時̗͡の̶̛̘̙̤̙̌̉͢い̷゙̊̈̓̓̅ば̬̬̩͈̊͡ら゙̜̩̹ぎ̫̺̓ͣ̕͡げ̧̛̩̞̽ん゙̨̼̗̤̂̄");
  }).start();

        new cron('0 30 15 * * *', function() {
    return send('twitter',"", "ｻﾝｼﾞﾊﾝ!");
  }).start();

      new cron('0 34 15 * * *', function() {
    return send('twitter',"", "何でや阪神関係ないやろ");
  }).start();


}
