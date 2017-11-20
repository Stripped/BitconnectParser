var request = require('request'), cheerio = require('cheerio');

//Загружаем страницу
request({uri:'https://bitconnect.co/learning-center/bitconnect-bitcoin-price-volatility-software', method:'GET', encoding:'UTF-8'},
    function (err, res, page) {
        //Передаём страницу в cheerio
        var $=cheerio.load(page);
        //Идём по DOM-дереву обычными CSS-селекторами
        //img_src=$('#col-xs-4 col-sm-2 text-center p10').text();
        var rendering = $.html('.col-xs-4.col-sm-2.text-center.p10 strong');
        //var redertext = cheerio.text($('<div class="м" style="border:1px dashed #484848"></div>'))
        //console.log(typeof(img_src));
        //console.log(img_src+' ');
        //console.log(rendering);
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
 

