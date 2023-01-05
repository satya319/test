// import all here
var aff = require('flipkart-affiliate');
const TelegramBot = require('node-telegram-bot-api');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const BitlyClient = require('bitly').BitlyClient;
const cron = require("node-cron");
var shortUrl = require('node-url-shortener');
const pd = require('pirated-data');
const productNames = ["bluetooth headphones", "wired headphones", "true wireless earbuds", "Infinix mobile", "SAMSUNG mobile", "Mi mobile", "APPLE mobile", "acer mobile", "ASUS mobile", "BlackBerry mobile", "Coolpad mobile", "GIONEE mobile", "Google mobile", "Honor mobile", "Huawei mobile", "iball mobile", "Infocus mobile", "Intex mobile", "IQOO mobile", "LAVA mobile", "Lenovo mobile", "LG mobile", "LYF mobile", "Micromax mobile", "MICROSOFT mobile", "MOTOROLA mobile", "Nokia mobile", "Nothing mobile", "OnePlus mobile", "OPPO mobile", "realme mobile", "mobile-camera-lens-protectors", "cases-covers", "power-banks", "smart-keys", "mobile-holders", "Mobile Sim & SD Card trays", "Mobile Flashes", "Mods", "Mobile Battery", "Screen Expander For Phones", "Mobile Pouches", "Earphone Cable Organizers", "Mobile Cables", "Mobile Enhancements", "Anti Radiation Stickers", "Charging Pads", "Selfie Sticks", "Headphone Amplifiers", "Headphone Splitters", "Smart Watches", "Smart Bands", "Bluetooth Hats", "Smart Gloves", "Smart Glasses", "Smart Headphones", "Smart Pendants", "Wearable Accessories", "Smart Trackers", "Smart Footwears", "Bluetooth Item Finders", "health-and-appliances-store", "philips trimmer", "syska trimmer", "havells trimmer", "kemei trimmer", "vaporizer", "nova trimmer", "hair straightner", "HP laptop", "dell laptop", "lenevo laptop", "acer laptop", "asus laptop", "msi laptop", "mi laptop", "apple laptop", "microsoft laptop", "gaming laptop", "chromebook", "Mini/Stick PCs", "desktop-pc", "Gaming Consoles", "Gaming Laptops", "Games", "Gaming Accessories", "Membership Cards", "Gaming Components", "Replacement Screens", "Memory Card Reader", "Hard Disk Skins", "Anti Dust Plugs", "Power Banks", "Keyboard Replacement keys", "Mouse", "Number Pads", "Wearable Mice", "UPS", "Monitor & TV Covers", "Heat Sinks", "Laptop Bag Covers", "Laptop Displays", "Projector Screens", "Laptop Skins & Decals", "Laptop Adapters", "Batteries", "Cooling Pads/Cooling stands", "Laptop Bags", "Keyboards", "Hard Drive Enclosures", "Presentation Remotes", "Screen Guards", "USB Gadgets", "Hard Disk Cases", "Laser Pointers", "Touchpads", "Docking Stations", "Keyboard Skins", "Webcams", "Mouse Pads", "Digital Pens", "Blank Media", "Security Locks", "Trackballs", "Cleaning Kits", "Wrist Rests", "Ink Bottles", "Toners", "Ink Cartridges", "Printers", "Print Servers", "Receipt Printers", "Pocket Printers", "tablets with call facility", "tablets without call facility", "apple tablet", "SAMSUNG tablet", "redmi tablet", "realme tablet", "oneplus tablet", "lenovo tablet", "microsoft tablet", "iball tablet", "MOTOROLA tablet", "HP tablet", "Speakers", "Soundbars", "Home Theatres", "smart speakers", "bluetooth speakers", "DSLR & Mirrorless", "Access Points", "Internal Modems", "LAN Adapters", "Network Interface Cards", "Router UPS", "Antenna Amplifiers", "Router Antennas & Boosters", "Switches", "Data cards", "Network Servers", "Wireless USB Adapters", "Cables", "Routers", "VOIP Adapters", "Large Screen TVs", "50 Inch 4K TVs", "42/43 Inch TVs", "32 Inch TVs", "TVs Under 1500", "realme smart tv", "mi smart tv", "oneplus smart tv", "LG smart tv", "SAMSUNG smart tv", "sony smart tv", "Vu smart tv", "thomson smart tv", "kodak smart tv", "toshiba smart tv", "sansui smart tv", "haier smart tv", "panasonic smart tv", "iFFalcon smart tv", "Marq by flipkart smart tv", "onida smart tv", "MOTOROLA smart tv", "SAMSUNG washing machines", "Whirlpool washing machines", "IFB washing machines", "Panasonic washing machines", "MarQ by Flipkart washing machines", "MOTOROLA washing machines", "Thomson washing machines", "Godrej washing machines", "BOSCH washing machines", "Haier washing machines", "Voltas Beko washing machines", "Lloyd washing machines", "ONIDA washing machines", "White Westinghouse washing machines", "realme TechLife washing machines", "Siemens washing machines", "TOSHIBA washing machines", "Sansui washing machines", "Midea washing machines", "Galanz washing machines", "Feltron washing machines", "Gangnam Street washing machines", "TCL washing machines", "Equator washing machines", "Candes washing machines", "Daenyx washing machines", "starshine washing machines", "Singer washing machines", "Lifelong washing machines", "Kelvinator washing machines", "Intex washing machines", "Hafele washing machines", "DMR washing machines", "CANDY washing machines", "Wybor washing machines", "Voltas washing machines", "RGL washing machines", "BUSH washing machines", "BPL washing machines", "Intex washing machines", "inverter ACs", "split ACs", "windows ACs", "CANDY ACs", "SAMSUNG ACs", "Whirlpool ACs", "Voltas ACs", "MarQ by Flipkart ACs", "Blue Star ACs", "Panasonic ACs", "LG ACs", "Hitachi ACs", "Daikin ACs", "Lloyd ACs", "CARRIER ACs", "Godrej ACs", "Haier ACs", "ONIDA ACs", "TOSHIBA ACs", "IFB ACs", "O General ACs", "MOTOROLA ACs", "Midea ACs", "Hisense ACs", "Thomson ACs", "Gazhal ACs", "GREE ACs", "Sansui ACs", "LIVPURE ACs", "realme TechLife ACs", "imee ACs", "Nokia ACs", "Vizio vision beyond imagination ACs", "iFFALCON ACs", "VG ACs", "Singer ACs", "Micromax ACs", "LumX ACs", "Gangnam Street ACs", "Single Door Refrigerators", "Double Door Refrigerators", "Triple door Refrigerators", "Side by Side Refrigerators", "Convertible Refrigerators", "SAMSUNG Refrigerators", "Whirlpool Refrigerators", "Haier Refrigerators", "Godrei Refrigerators", "ONIDA Refrigerators", "Panasonic Refrigerators", "Lloyd Refrigerators", "CANDY Refrigerators", "MarQ by Flipkart Refrigerators", "BOSCH Refrigerators", "Voltas Beko Refrigerators", "realme TechLife Refrigerators", "Midea Refrigerators", "Kelvinator Refrigerators", "Liebherr Refrigerators", "Voltas Refrigerators", "MOTOROLA Refrigerators", "Lifelong Refrigerators", "TOSHIBA Refrigerators", "Hitachi Refrigerators", "Hisense Refrigerators", "Galanz Refrigerators", "voltasbeko Refrigerators", "MITASHI Refrigerators", "BPL Refrigerators", "Kitchen Appliances", "Microwave Ovens", "Oven Toaster Grills (OTG)", "Juicer/Mixer/Grinder", "Electric Kettle", "Induction Cooktops", "Chimneys", "Hand Blenders", "Sandwich Makers", "Pop Up Toasters", "Electric Cookers", "Wet Grinders", "Food Processors", "Coffee Makers", "Dishwashers", "water purifier", "Butterfly Home & Kitchen", "USHA Home & Kitchen", "Haier Home & Kitchen", "Wonderchef Home & Kitchen ", "Home Appliances", "HAVELLS Home & Kitchen", "Godrej Home & Kitchen", "Kitchen Appliances", "candes Home & Kitchen", "IFB Home & Kitchen", "Inverters and Accessories", "Diffusers / Humidifiers", "Irons", "Water purifiers", "Water Geysers", "Air Purifiers", "Room Heaters", "Voltage Stabilizers", "Sewing Machines", "Vacuum Cleaners", "Immersion Rods", "Fans", "Air Coolers", "Landline Phones", "Appliance Parts & Accessories", "Dimmers", "Sensor Security Systems", "Dryer", "Compact Refrigerators", "freezer chests", "men Footwear", "men Sports Shoes", "men Casual Shoes", "men Formal Shoes", "men Sandals & Floaters", "men Flip- Flops", "men Loafers", "men Boots", "men Running Shoes", "men Sneakers", "Men's Grooming", "men Deodorants", "men perfumes", "men Beard Care & Grooming", "men Shaving & Aftershave", "Sexual Wellness", "men Winter Wear", "men Topwear", "men Bottomwear", "men Raincoats", "men Clothing Accessories", "men Jumpsuits and Dungarees", "men Kurtas, Ethnic Sets and suits", "men Fabrics", "men Windcheaters", "men Sleepwear", "men Innerwear and Swimwear", "men Tracksuits", "men Blazers, Waistcoats", "men T-Shirts", "men Formal Shirts", "men Casual Shirts", "men Bottom wear", "men Jeans", "men Casual Trousers", "men Formal Trousers", "men Track pants", "men Shorts", "men Cargos", "men Three Fourths", "men Winter Wear", "men Sweatshirts", "men Jackets", "men Sweater", "men Tracksuits", "men Ethnic wear", "men Kurta", "men Ethnic Sets", "men Sherwanis", "men Ethnic Pyjama", "men Dhoti", "men Lungi", "men Innerwear & Loungewear", "men Briefs & Trunks", "men Vests", "men Boxers", "men Pyjamas and Lounge Pants", "men Thermals", "men Night Suits", "men Raincoats & Windcheaters", "men Watches", "men Fastrack Watches", "men Casio Watches", "men Titan Watches", "men Fossil Watches", "men Sonata Watches", "men Backpacks", "men Wallets", "men Belts", "men Sunglasses", "men Luggage & Travel", "men Frames", "men Jewellery", "men APPLE smart Watches", "men Noise smart Watches", "men Ultrafit smart Watches", "men iSmart smart Watches", "men huami smart Watches", "men Mi  smart Watches", "men GIONEE  smart Watches", "men realme smart Watches", "men wear me smart Watches", "men FITBIT smart Watches", "men Fire-Boltt smart Watches", "men GOQii smart Watches", "men boAt smart Watches", "men Body Safe smart Watches", "men Fusion Tech smart Watches", "men Boult smart Watches", "men Amazfit smart Watches", "men SAMSUNG smart Watches", "men Fastrack smart Watches", "men Ambrane smart Watches", "men HealthMax smart Watches", "men Crystal Digital smart Watches", "men Titan smart Watches", "men AMAZICAL smart Watches", "mi smart bands", "realme smart bands", "samsung smart bands", "fitbit smart bands", "Adidas Footwear", "Beardo", "Reebok Footwear", "Skechers Footwear", "Nike Footwear"];

// const productNames = require('./productName')
// import { productNames } from './productName';


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
var resultsforfind = {};
var productInfo = [];
var maxIndex;
var MaxDiscountPrice;
var MaxDiscountProdName;
var maxDiscountProdLink;


// get deal of the year
// const dealofday=()=>{
//     fkc.getDealsOfDay(null, function (err, resp) { //DOD
//         if (!err) {
//             console.log("typeof: ", resp);
//             var obj = JSON.parse(resp);
//             productUrl = obj.dotdList[0].url;
//             console.log(obj);
//             return productUrl;
//             //productName = obj.dotdList[0].
//             // console.log("json is: ", obj.dotdList[0].url);
//             // api.open("GET", url, true);
//             // api.send();

//         } else {
//             console.log(err);
//         }

//     });
// }
// dealofday();


// keyword search and give the maximum discount product's name discount percentage and url
const keywordProduct = () => {
    fkc.keywordSearch({
        query: productNames[pd.randomNumberGenerator(productNames.length)], //search String
        resultCount: "10" //no of products in result
    }, function (err, results) {
         productInfo.length = 0;
        // console.log(pd.randomNumberGenerator(40));
        if (err) {
            console.log(err);
        } else {
            resultsforfind = JSON.parse(results);
           console.log("array length: ",productInfo.length);
            console.log(typeof (resultsforfind));
            console.log(resultsforfind.products[0].productBaseInfoV1.discountPercentage);
            for (i = 0; i <= 9; i++) {
                productInfo.push(resultsforfind.products[i].productBaseInfoV1.discountPercentage);
                console.log("running for loop",productInfo.push(resultsforfind.products[i].productBaseInfoV1.discountPercentage))
            }
            var largest = Math.max.apply(0, productInfo);
             console.log("product info after push: ",productInfo);
             console.log("maximum discount index: ",productInfo.indexOf(largest));
            maxIndex = productInfo.indexOf(largest);
            console.log("maxindex is: ",maxIndex);
            console.log("products: ",resultsforfind);
             MaxDiscountPrice = resultsforfind.products[maxIndex].productBaseInfoV1.discountPercentage;
            MaxDiscountProdName = resultsforfind.products[maxIndex].productBaseInfoV1.title;
            maxDiscountProdLink = resultsforfind.products[maxIndex].productBaseInfoV1.productUrl;
            //var y = pd.randomNumberGenerator(448);
            // var y = productNames[40];
            // console.log("number random: ", y);
        }
    })
};


shortUrl.short(maxDiscountProdLink, function (err, url) {
    shortedUrl = url;
    console.log("product url is: ", url);
});

const bot = new TelegramBot(token, { polling: true });
bot.on("polling_error", console.log);
// setTimeout(() => bot.sendMessage(chat_id, shortedUrl), 5000);

// bot.on('message', (msg) => {

//     var hi = "hi";
//     // dealofday();

//     if (msg.text.toString().toLowerCase().indexOf(hi) === 0) {
//         bot.sendMessage(msg.chat.id, `<b>${MaxDiscountProdName}</b> \n <i>${MaxDiscountPrice + " % off"}</i>\n <a target=\"_blank\" href=\"${maxDiscountProdLink}\">Click here to get it.</a>`, { parse_mode: "HTML" });
//     }

//     var bye = "bye";
//     if (msg.text.toString().toLowerCase().includes(bye)) {
//         bot.sendMessage(msg.chat.id, `[click on link](${shortedUrl})`, { parse_mode: "Markdown" });
//     }

// });



 cron.schedule("*/2 * * * *", function () {
     keywordProduct();
   setTimeout(() => bot.sendMessage(chat_id, `<b>${MaxDiscountProdName}</b> \n <i>${MaxDiscountPrice + " % off"}</i>\n <a target=\"_blank\" href=\"${maxDiscountProdLink}\">Click here to get it.</a>`, { parse_mode: "HTML" }), 5000);
    console.log("running a task every11 sec");
});

