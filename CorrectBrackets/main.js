function correctBrackets(input) {
    var splittedArray = input.split('');
    if ((splittedArray.length & 1) === 1 ||
        splittedArray[0] === ')' ||
        splittedArray[0] === '}' ||
        splittedArray[0] === ')') {
        console.log(false);
    }
    else {
        for (var i = 0; i < splittedArray.length; i++) {
            var temp = 0;
            if (splittedArray[temp] === splittedArray[i]) {
                temp = i;
            }
            switch (splittedArray[i]) {
                case ']':
                case ')':
                case '}':
                    for (var j = i - 1; j >= 0; j--) {
                        if ((splittedArray[i] === ']' &&
                            splittedArray[j] === '[') ||
                            (splittedArray[i] === ')' &&
                                splittedArray[j] === '(') ||
                            (splittedArray[i] === '}' &&
                                splittedArray[j] === '{')) {
                            temp = j;
                            break;
                        }
                    }
                    if (splittedArray
                        .slice(temp + 1, i)
                        .filter(function (c) { return c === '('; }).length !==
                        splittedArray
                            .slice(temp + 1, i)
                            .filter(function (c) { return c === ')'; }).length ||
                        splittedArray
                            .slice(temp + 1, i)
                            .filter(function (c) { return c === '['; }).length !==
                            splittedArray
                                .slice(temp + 1, i)
                                .filter(function (c) { return c === ']'; }).length ||
                        splittedArray
                            .slice(temp + 1, i)
                            .filter(function (c) { return c === '{'; }).length !==
                            splittedArray
                                .slice(temp + 1, i)
                                .filter(function (c) { return c === '}'; }).length) {
                        console.log(false);
                        return;
                    }
                    splittedArray.splice(i, 1);
                    splittedArray.splice(temp, 1);
                    i = -1;
                    break;
            }
        }
        if (splittedArray.length === 0) {
            console.log(true);
        }
    }
}
correctBrackets('[[]()]'); //yes
correctBrackets('([)]'); //no
