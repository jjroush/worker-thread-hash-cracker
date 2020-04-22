import crypto from 'crypto';

const crack = (hashInput = '42f58798317292157b589727933614d8') => {
    console.time("timer");

    let match;

    for (let i = 0; i <= 999999; i++) {
        const hash = crypto.createHash('md5').update(i.toString()).digest('hex');
        if (hash === hashInput) {
            match = i;
            console.log('match')
        }
        console.log(i + ': ' + hash);
    }
    console.log(match)
    console.timeEnd('timer');
}

crack();