import http from 'k6/http';
import { sleep } from 'k6';

let ediX12File = open('input-files/small-file-x12-004010-210.edi');

export default function () {
    var data = {
        file: http.file(ediX12File, 'x12-test.edi'),
    };

    var res = http.post('http://b2b-inbound-maps-x12-v3-0-0.us-e2.cloudhub.io/x12/210', data);
    sleep(3);
}