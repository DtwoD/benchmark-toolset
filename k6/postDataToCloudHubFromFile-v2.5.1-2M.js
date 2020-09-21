import http from 'k6/http';
import { sleep,check } from 'k6';

let ediX12File = open('input-files/X12-2.04 MB.edi');

export default function () {

    var res = http.post('http://x12-read-flow-v251.us-e2.cloudhub.io/x12/210', ediX12File,{timeout:300000});
//    var res = http.post('http://localhost:8081/x12/210', ediX12File);

    // check(res, {
    //     'OK': (r) => r.body["Errors"]!=undefined,
    //     'ERROR': (r) => r.body["Errors"] ==undefined,
    //   });
    // console.log(res.body);
console.log(res.body);

    sleep(3);
}