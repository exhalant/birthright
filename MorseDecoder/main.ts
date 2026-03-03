import { morse } from './export';

function decoder(input: string): string {
    let temp: string[] = [];
    let result: string = '';
    let spaceCount = 0;

    for (let i = 0; i < input.length; i++) {
        let char = input[i];

        if (char === '-' || char === '.') {
            temp.push(char);
            spaceCount = 0;
        } else if (char === ' ') {
            spaceCount++;

            if (spaceCount === 1) {
                let key = temp.join('');
                if (morse[key]) {
                    result += morse[key];
                }
                temp = [];
            } else if (spaceCount === 3) {
                let key = temp.join('');
                if (morse[key]) {
                    result += morse[key];
                }
                result += ' ';
                temp = [];
                spaceCount = 0;
            }
        }
    }
    if (temp.length > 0) {
        let key = temp.join('');
        if (morse[key]) {
            result += morse[key];
        }
    }

    return result.trim();
}

console.log(decoder('.... . .-.. .-.. ---   .-- --- .-. .-.. -.. -.-.--'));
