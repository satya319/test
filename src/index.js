// import all here
var aff = require('flipkart-affiliate');
const TelegramBot = require('node-telegram-bot-api');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const BitlyClient = require('bitly').BitlyClient;
const cron = require("node-cron");
var shortUrl = require('node-url-shortener');

// all object here
const api = new XMLHttpRequest();
const bitly = new BitlyClient('ee8251f27304ceb677990860cda5a682c5dda617', {});

var fkc = aff.createClient({
    FkAffId: 'jagan319', //as obtained from [Flipkart Affiliates API](https://affiliate.flipkart.com/api-docs/)
    FkAffToken: 'bdf954ba52f64232a3612bfae3e52ea4',
    responseType: 'json'
});

// all variable here
var productUrl = "https://www.flipkart.com/mobile-accessories/cases-and-covers/designer-cases-covers/pr?sid=tyy%2C4mr%2Cq2u%2Cqgl&offer=nb%3Amp%3A1130f54629&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJFeHRyYSAxMCUgb2ZmIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiRGVzaWduZXIgQ2FzZXMgJiBDb3ZlcnMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&affid=jagan319";
var y = "Make sure your question is on-topic and suitable for this site";
const token = "5836609438:AAGM7E9nUz77xXKP0PeCQm1rukR5cQjnobQ";
const chat_id = "-1001846161767";
message = "fetch testing";

// get deal of the year
const dealofday=()=>{
    fkc.getDealsOfDay(null, function (err, resp) { //DOD
        if (!err) {
            console.log("typeof: ", resp);
            var obj = JSON.parse(resp);
            productUrl = obj.dotdList[0].url;
            console.log(obj);
            return productUrl;
            //productName = obj.dotdList[0].
            // console.log("json is: ", obj.dotdList[0].url);
            // api.open("GET", url, true);
            // api.send();
    
        } else {
            console.log(err);
        }
    
    });
}

shortUrl.short(productUrl, function(err, url){
    shortedUrl = url;
    console.log("product url is: ",url);
});

const bot = new TelegramBot(token, { polling: true });
bot.on("polling_error", console.log);
setTimeout(() => bot.sendMessage(chat_id, shortedUrl), 5000);

bot.on('message', (msg) => {

    var hi = "hi";
    dealofday();

    if (msg.text.toString().toLowerCase().indexOf(hi) === 0) {
        bot.sendMessage(msg.chat.id, `<b>bold</b> \n <i>italic</i> \n <em>italic with em</em> \n <a target=\"_blank\" href=\"${shortedUrl}\">inline URL</a> \n <code>inline fixed-width code</code> \n <pre>pre-formatted fixed-width code block</pre>` ,{parse_mode : "HTML"});
    }

    var bye = "bye";
    if (msg.text.toString().toLowerCase().includes(bye)) {
        bot.sendMessage(msg.chat.id, `[click on link](${shortedUrl})`,{parse_mode : "Markdown"});
    }

});

// fkc.keywordSearch({
//     query: "laptop", //search String
//     resultCount: "5" //no of products in result
//   }, function(err, results){
//     if(err){
//       console.log(err);
//     } else{
//       console.log(results);
//     }
// });


// cron.schedule("*/11 * * * * *", function () {
//     dealofday();
//     setTimeout(() => bot.sendMessage(chat_id, productUrl), 5000);
//     console.log("running a task every11 sec");
// });

