const fs = require('fs');
var dir = './outputs';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

const MB10 = 90000;
const MB100 = 900000; // generates a file of ~100mb

const COUNT = MB10;

// random data...
var first_names = ["Graig", "Ingeborg", "Mikael"];
var last_names = ["Tainton", "Nobbs", "Manley"];
var emails = ["gtainton0@wikipedia.org", "inobbs1@jimdo.com", "mmanley2@amazonaws.com"];
var ip_addresses = ["124.201.22.2", "44.197.242.40", "135.32.238.141"];

var stream = fs.createWriteStream("./outputs/sample.json");

stream.write("[\n");
[...Array(COUNT)].forEach((_, idx) => {
    var first_name = first_names[Math.floor(Math.random() * first_names.length)];
    var last_name = last_names[Math.floor(Math.random() * last_names.length)];
    var email = emails[Math.floor(Math.random() * emails.length)];
    var ip_address = ip_addresses[Math.floor(Math.random() * ip_addresses.length)];
    var str = JSON.stringify({ first_name, last_name, email, ip_address }) + (idx < COUNT - 1 ? ",\n" : "");
    stream.write(str);
});
stream.write("\n]");

stream.end();