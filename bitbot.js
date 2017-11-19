var TelegramBot = require('node-telegram-bot-api');
var token = '494529036:AAFsmmpqUq9kyYTPG5Crl03XcnyLSA-Z4SA';
var bot = new TelegramBot(token, {polling: true});
var todaydate = new Date();
//var correctdate = todaydate.substring(0,9);
console.log(todaydate);
//0-9

bot.on('message', function (msg) {
    var chatId = msg.chat.id;
    console.log(msg);
    bot.sendMessage(chatId, "Hello!", {caption: "I'm a bot!"});
});