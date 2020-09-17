const fetch = require('node-fetch');
const fs = require('fs');
const data = require('./outputs/sample.json');

const FILE_SUFFIX = process.env.NAME || "";

console.log(Date.now());
fetch('http://localhost:8090/json/xml?output=xml', { // <== ?output=xml returns an xml file
  method: 'POST',
  body: JSON.stringify(data),
  headers:{
    'Content-Type': 'application/json'
  }
})
.then(res => res.text())
.then(body => {
  fs.writeFile(`./outputs/response${FILE_SUFFIX}.xml`, body, function(err) {
      if(err) {
          return console.log(err);
      }
      console.log("The file was saved!");
      console.log(Date.now());
  });
})
.catch(console.error);
