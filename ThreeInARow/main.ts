function ThreeInARow(input: number): void {
    switch (input) {
        case 0:
            console.log('Нужно число 0 < N < 36');
            break;
        case 1:
            console.log(2);
            break;
        case 2:
            console.log(4);
            break;
        case 3:
            console.log(7);
            break;
        default:
            let temp: number[] = [2, 4, 7];
            for (let i = 0; i < input - 3; i++) {
                temp.push(
                    temp.slice(i, i + 3).reduce((a, b) => a + b, 0),
                );
            }
            console.log(temp.pop());
            break;
    }
}
ThreeInARow(5);
