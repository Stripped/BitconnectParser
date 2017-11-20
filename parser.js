var request = require('request'), cheerio = require('cheerio');

//Загружаем страницу
request({uri:'https://bitconnect.co/learning-center/bitconnect-bitcoin-price-volatility-software', method:'GET', encoding:'UTF-8'},
    function (err, res, page) {
        //Передаём страницу в cheerio
        var $=cheerio.load(page);
        //Идём по DOM-дереву обычными CSS-селекторами
        //$('#col-xs-4 col-sm-2 text-center p10').text();
        var rendering = $.html('.col-xs-4.col-sm-2.text-center.p10 strong');
        var arrofroyal = rendering.split('g>').map(function(item, i, arr) {
        	item = arr[i].match("\.\.\.\.%");
        	if(item) {
        		return item.toString();
        	}

        	return null;
	    });

        //console.log(arrofroyal);
        module.exports.massiv = arrofroyal;
    });
 


