var parser = require('./parser.js');
const TelegramBot = require('node-telegram-bot-api');
const token = '494529036:AAFsmmpqUq9kyYTPG5Crl03XcnyLSA-Z4SA';
const bot = new TelegramBot(token, {polling: true});



bot.onText(/\/royalty/, (msg, match) => {


  const chatId = msg.chat.id;
  const tomorrow = 'Доходность завтра: '+parser.massiv[0];
  const today ='Доходность сегодня: '+ parser.massiv[1] ;
  const yesterday ='Доходность вчера: '+parser.massiv[2] ;

  
  bot.sendMessage(chatId, tomorrow);
  bot.sendMessage(chatId, today);
  bot.sendMessage(chatId, yesterday);
});