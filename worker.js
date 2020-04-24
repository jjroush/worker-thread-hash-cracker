import { workerData, parentPort } from 'worker_threads';
import crypto from 'crypto';

let passcode;

workerData.forEach(item => {
    const hash = crypto.createHash('md5').update(item.toString()).digest('hex');

    if (hash === '29c3eea3f305d6b823f562ac4be35217') {
        passcode = item;
    }
})

if(!passcode) passcode = null
parentPort.postMessage( passcode )