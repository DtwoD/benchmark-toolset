import http from 'k6/http';
import { sleep,check } from 'k6';


let ediX12File = open('input-files/X12-615 B.edi');

export default function () {
    var res = http.post('http://b2b-inbound-maps-x12-v3-0-0.us-e2.cloudhub.io/x12/210', ediX12File);
   // var res = http.post('http://localhost:8081/x12/210', ediX12File);

    // check(res, {
    //     'OK': (r) => r.body["Errors"]!=undefined,
    //     'ERROR': (r) => r.body["Errors"] ==undefined,
    //   });
    // console.log(res.body);

    sleep(3);
}