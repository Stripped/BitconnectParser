var request = require('request'), cheerio = require('cheerio');

//Загружаем страницу
request({uri:'https://bitconnect.co/learning-center/bitconnect-bitcoin-price-volatility-software', method:'GET', encoding:'binary'},
    function (err, res, page) {
        //Передаём страницу в cheerio
        var $=cheerio.load(page);
        //Идём по DOM-дереву обычными CSS-селекторами
        img_src=$('div.s9a3 > div > div > a > div > div > img').attr("src");
        console.log(img_src);
    });
