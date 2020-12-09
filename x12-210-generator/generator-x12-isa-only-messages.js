const fs = require('fs')
const utils = require('./utils')

const myArgs = process.argv.slice(2)
const folderToCopyFile = myArgs[1]
const index = myArgs[0] ? myArgs[0] : 1
const dir = './outputs'
var outputFile = dir + "/message.edi";

if (!fs.existsSync(dir))
    fs.mkdirSync(dir)


const isaFragmentTemplate = fs.readFileSync("templates/EDI-START-FRAGMENT").toString()
const iseFragmentTemplate = fs.readFileSync("templates/EDI-END-FRAGMENT").toString()

fs.writeFileSync(outputFile, isaFragmentTemplate)
fs.appendFileSync(outputFile, iseFragmentTemplate)

for(let i = 1; i <= index; i++) {
    fs.appendFileSync(outputFile, isaFragmentTemplate)
    fs.appendFileSync(outputFile, iseFragmentTemplate)
}

let fileSize = utils.getFileSize(outputFile);
console.log('\x1b[33m%s\x1b[0m',`Generated file with ${fileSize}`)

if(folderToCopyFile){
    if (!fs.existsSync(folderToCopyFile))
        fs.mkdirSync(folderToCopyFile)

    let pathToCp = `${folderToCopyFile}/X12-${fileSize}.edi`
    fs.copyFile(outputFile, pathToCp, (err) => {
        if (err) throw err;
        console.log('\x1b[33m%s\x1b[0m',`Copied message.edi to ${pathToCp}`)
    })
}
