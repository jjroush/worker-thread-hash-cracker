import {Worker} from 'worker_threads';

let passwordList = [];
console.time("timer");
for (let i = 1; i <= 99999999; i++)
    passwordList.push(i.toString().padStart(6, '0'));

const worker1 = new Promise((resolve, reject) => {
    const workera1 = new Worker('./worker.js', {workerData: passwordList.slice(0, 22222222)});
    workera1.on('message', resolve);
});

const worker2 = new Promise((resolve, reject) => {
    const workera2 = new Worker('./worker.js', {workerData: passwordList.slice(22222223, 555555555)});
    workera2.on('message', resolve);
});

const worker3 = new Promise((resolve, reject) => {
    const workera3 = new Worker('./worker.js', {workerData: passwordList.slice(55555556, 99999999)});
    workera3.on('message', resolve);
});

Promise.all([worker1, worker2, worker3]).then(values => {
    console.log(values);
    console.timeEnd('timer');
});