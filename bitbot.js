var parser = require('./parser.js');
var ontime = require('ontime')

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
// /payments deposit days
bot.onText(/\/payments\s\d+\s\d+/, (msg, match) => {
const chatId = msg.chat.id;
console.log(match+'   -----Поймал');
var paydata = (match.toString()).split(' ');
console.log(paydata);
var i =0;
var startdeposit = parseInt(paydata[1],10);
if ((parseInt(paydata[2],10))<=0) 
{
  bot.sendMessage(chatId,'Ваш депозит через '+paydata[2]+' дней составит :');
  bot.sendMessage(chatId,parseInt(paydata[1],10));
  bot.sendMessage(chatId,'А вообще ты не очень смышлённый человек,не делай так больше');
}
else 
{
   while (i<parseInt(paydata[2],10)) 
    {
	var enddeposit = startdeposit + startdeposit*0.0096;
	var startdeposit = enddeposit;
	i++;
    }
	console.log(enddeposit);
	bot.sendMessage(chatId,'Ваша депозит через '+paydata[2]+' дней составит :');
	bot.sendMessage(chatId,enddeposit);
};
ontime({
    cycle: '00:00:01',
    log: true,
    keepLast: true
}, function (ot) {
	  var todaydate = new Date();
	  bot.onText(/\/royalty/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message
      console.log('ya rabotau');
      const chatId = msg.chat.id;
      const today ='Доходность сегодня: '+ parser.massiv[1] ;


	  bot.sendMessage(chatId,todaydate);
      bot.sendMessage(chatId, 'Доброе утро будущие и настоящие миллионеры,сегодня вас ждёт такая доходность: ');
      bot.sendMessage(chatId, today);
      });
    ot.done()
    return
});
});
