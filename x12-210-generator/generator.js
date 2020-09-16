const fs = require('fs');
var dir = './outputs';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

var stFragment = fs.readFileSync("templates/ST-FRAGMENT").toString();
var append = "";
let index = 999999;
for(let i = 1;i<=index;i++){
    append+=(stFragment.split("{$fi}").join(i.toString().padStart(7, "0")))+"\n";
}

var stFragment = fs.readFileSync("templates/EDI-FRAGMENT").toString();
fs.writeFileSync("outputs/message.edi",stFragment.split("{$fr}").join(append).split("{$index}").join(index));
