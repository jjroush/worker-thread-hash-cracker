import {Worker} from 'worker_threads'
import readline from 'readline'

import {passwordArray, chunkArray} from '../helpers.js'

let threads = 1;
let promiseArray = [];
const hash = process.argv[2]

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => console.log(`Node echo: ${line}`));

if (process.argv[3])
    threads = process.argv[3];

const chunkedArray = chunkArray(passwordArray, threads);
console.log(`Spinning up ${threads} worker threads.`);

console.time('timer');

for (let i = 0; i < threads; i++) {
    promiseArray.push(
        new Promise((resolve, reject) => {            
            const worker = new Worker('./worker.js', {workerData: chunkedArray[i]});
            worker.on('message', resolve);
        })
    )
}

Promise.all(promiseArray).then(values => {
    const result = values.filter(result => result);
    
    console.log(`Passcode from hash: ${result[0]}`);
    console.timeEnd('timer');
    rl.close();
});