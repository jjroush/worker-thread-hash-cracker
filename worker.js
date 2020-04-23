import { workerData, parentPort } from 'worker_threads';
import crypto from 'crypto';

let passcode;

workerData.forEach(item => {
    const hash = crypto.createHash('md5').update(item.toString()).digest('hex');

    if (hash === '42f58798317292157b589727933614d8') {
        passcode = item;
    }
})

if(!passcode) passcode = null
parentPort.postMessage({ passcode })