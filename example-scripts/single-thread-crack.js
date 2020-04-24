import crypto from 'crypto'
import readline from 'readline'

import {passwordArray} from '../helpers.js'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => console.log(`Node echo: ${line}`));

console.log('Started hashing. (~20 seconds to completion)')

const crack = (hashInput = '29c3eea3f305d6b823f562ac4be35217') => {
    console.time('Time taken to hash a million passcodes:');
    let match;
    for (let i = 0; i < passwordArray.length; i++) {
        const hash = crypto.createHash('md5').update(passwordArray[i]).digest('hex');
        if (hash === hashInput) {
            match = passwordArray[i];
        }
    }
    console.log('\x1b[32m', `Passcode matching hash: ${match}`);
    console.timeEnd('Time taken to hash a million passcodes:');
    console.log('\x1b[0m')
    setTimeout(() => rl.close(), 2000);
}

crack();