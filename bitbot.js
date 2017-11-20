var parser = require('./parser.js');
const TelegramBot = require('node-telegram-bot-api');
const token = '494529036:AAFsmmpqUq9kyYTPG5Crl03XcnyLSA-Z4SA';
const bot = new TelegramBot(token, {polling: true});
//var todaydate = new Date();
//var correctdate = todaydate.substring(0,9);
//console.log(todaydate);
//0-9

// Matches "/echo [whatever]"
bot.onText(/\/royalty/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const tomorrow = 'Доходность завтра: '+parser.massiv[0];
  const today ='Доходность сегодня: '+ parser.massiv[1] ;
  const yesterday ='Доходность вчера: '+parser.massiv[2] ;

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, tomorrow);
  bot.sendMessage(chatId, today);
  bot.sendMessage(chatId, yesterday);
});