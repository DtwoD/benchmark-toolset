import http from 'k6/http';
import { sleep,check } from 'k6';
import fs from 'fs';



let ediFrgment = open('input-files/EDI-FRAGMENT');
let stFragment= open('input-files/ST-FRAGMENT');
let f = "";
for(let i = 1;i<=3;i++){ 
    f+=(stFragment.replace("{$formated_index}",i.toString().padStart(3, "0")));
}
console.log(f)
fs.writeFile('message.edi', f, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log('Lyric saved!');
});
let ediX12File = open('input-files/IB_322_RailStatus-100000.edi');
// let ediX12File = open('input-files/small-file-x12-004010-210.edi');

export default function () {
    var data = {
        file: http.file(ediX12File, 'x12-test.edi'),
    };

    // var res = http.post('http://b2b-inbound-maps-x12-v3-0-0.us-e2.cloudhub.io/x12/210', ediX12File);
   // var res = http.post('http://localhost:8081/x12/210', ediX12File);

    // check(res, {
    //     'OK': (r) => r.body["Errors"]!=undefined,
    //     'ERROR': (r) => r.body["Errors"] ==undefined,
    //   });
    // console.log(res.body);

    sleep(3);
}