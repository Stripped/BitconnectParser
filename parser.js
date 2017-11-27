var request = require('request');
var cheerio = require('cheerio');
var CoinMarketCap = require("node-coinmarketcap");
var coinmarketcap = new CoinMarketCap();



//Загружаем страницу
request({
        uri: 'https://bitconnect.co/learning-center/bitconnect-bitcoin-price-volatility-software',
        method: 'GET',
        encoding: 'UTF-8'
    },
    function(err, res, page) {
        //Передаём страницу в cheerio
        var $ = cheerio.load(page);
        //Идём по DOM-дереву обычными CSS-селекторами
        var rendering = $.html('.col-xs-4.col-sm-2.text-center.p10 strong');
        var bccource =  $.html('span.xs-fs-12 span');
        //console.log(bccource);
        var arrofroyal = rendering.split('g>').map(function(item, i, arr) {
            item = arr[i].match("\.\.\.\.%");
            if (item) {
                return item.toString();
            }

            return null;
        });
        var bccarray = bccource.split('n><s').map(function(item1, ia, arr1) {
            var expr = /(?:\$)(\d+)\.?(\d+)/g;
            item1 = arr1[ia].match(expr);
            if (item1) {
                return item1.toString();
                //console.log(item1.toString());
            }

            return null;
        });

        //console.log(arrofroyal);
        //console.log(bccarray);


        module.exports.massiv = arrofroyal;
        module.exports.massivbcc = bccarray;
    });
 topcoins = coinmarketcap.multi(coins =>
  {
    
     coins.getTop(3); 
     //console.log(coins.getTop(3));// Prints information about top 25 cryptocurrencies
     
  }
);

console.log(topcoins);
