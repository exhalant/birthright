function wordCounter(string: string): number {
    let stringArray: string[] = string.split(' ');

    for (let i: number = stringArray.length - 1; i >= 0; i--) {
        if (stringArray[i] === '') {
            stringArray.splice(i, 1);
        }
    }

    stringArray = stringArray.filter(
        (word, i) => stringArray.indexOf(word) === i,
    );
    console.log(stringArray.length);
    return stringArray.length;
}

wordCounter(
    "She sells sea shells on the sea shore; The shells that she sells are sea shells I'm sure. So if she sells sea shells on the sea shore, I'm sure that the shells are sea shore shells.",
);
wordCounter('AA aa Aa aA');
wordCounter(
    'a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a',
);
