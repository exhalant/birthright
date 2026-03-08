import { alphavite } from './export.js';

function sequenceOfLetters(input: string): void {
    const numberArray: number[] = input.split(' ').map((s) => +s);
    numberArray.splice(0, 1);
    let alphaviteCopy: string[] = alphavite.split(' ');
    const result: Record<string, number> = {};
    let count: number = 0;

    for (let i: number = 0; i < numberArray.length; i++) {
        result[alphaviteCopy[i]] = numberArray[i];
    }
    for (var h = 0; h < numberArray.length - 1; h++) {
        count += Math.min(
            result[alphaviteCopy[h]],
            result[alphaviteCopy[h + 1]],
        );
    }
    console.log(count);
}

sequenceOfLetters('2 3 4');//3
sequenceOfLetters('3 1 1 1');//2
