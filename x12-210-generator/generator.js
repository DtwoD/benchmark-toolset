const fs = require('fs');
const utils = require('./utils');
const myArgs = process.argv.slice(2);
const folderToCopyFile = myArgs[1];
const index = myArgs[0]?myArgs[0]:1;

var dir = './outputs';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
var stFragment = fs.readFileSync("templates/ST-FRAGMENT").toString();
var append = "";
for(let i = 1;i<=index;i++){
    append+=(stFragment.split("{$fi}").join(i.toString().padStart(7, "0")))+"\n";
}

var stFragment = fs.readFileSync("templates/EDI-FRAGMENT").toString();
fs.writeFileSync(dir+"/message.edi",stFragment.split("{$fr}").join(append).split("{$index}").join(index),{});
let fileSieze = utils.getFileSize(`${dir}/message.edi`);
console.log('\x1b[33m%s\x1b[0m',`Generated file with ${fileSieze}`);

if(folderToCopyFile){
    if (!fs.existsSync(folderToCopyFile)){
        fs.mkdirSync(folderToCopyFile);
    }
    let pathToCp = `${folderToCopyFile}/X12-${fileSieze}.edi`;
    fs.copyFile(`${dir}/message.edi`, pathToCp, (err) => {
        if (err) throw err;
        console.log('\x1b[33m%s\x1b[0m',`Copied message.edi to ${pathToCp}`);
    });
}

