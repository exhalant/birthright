import { enter } from './export';

function synonymFinder(enter: string): any {
    const group: string[] = enter.split(' ');
    group.splice(0, 1);
    const findingWord: any = group.splice(group.length - 1, 1);
    for (let i = 0; i < group.length; i++) {
        if (group[i] === findingWord[0]) {
            if ((i & 1) === 0) {
                console.log(group[i + 1]);
                return;
            }
            console.log(group[i - 1]);
            return;
        }
    }
}
synonymFinder(enter);
