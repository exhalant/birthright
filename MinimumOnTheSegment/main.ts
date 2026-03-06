import { enter } from './export';
function minimumFinder(enter: string): any {
    const input: string[] = enter.split(' ');
    input.splice(0, 1);
    const condition: number = +input.splice(0, 1);
    for (let i = 0; i < input.length; i++) {
        if (i + condition - 1 < input.length) {
            let temp = input.slice(i, i + condition).map((s) => +s);
            console.log(Math.min(...temp));
        }
    }
    return;
}
minimumFinder(enter);
