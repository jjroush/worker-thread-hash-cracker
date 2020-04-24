import crypto from 'crypto'
import {passwordArray} from './helpers.js'

const crack = (hashInput = '29c3eea3f305d6b823f562ac4be35217') => {
    console.time("timer");
    let match;
    for (let i = 0; i < passwordArray.length; i++) {
        const hash = crypto.createHash('md5').update(passwordArray[i]).digest('hex');
        if (hash === hashInput) {
            match = passwordArray[i];
        }
    }
    console.log(match)
    console.timeEnd('timer');
}

crack();