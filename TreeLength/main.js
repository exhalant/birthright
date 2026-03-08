function TreeLengthCounter(input) {
    var _a, _b;
    var treeNumbers = input
        .split(' ')
        .map(function (s) {
            return +s;
        })
        .filter(function (item, index, array) {
            return array.indexOf(item) === index;
        })
        .filter(function (num) {
            return num !== 0;
        });
    var temp = [];
    var result = 1;
    for (var i = 0; i < treeNumbers.length; i++) {
        var counterMin = 0;
        var counterMax = 0;
        var minNum = (_a = treeNumbers[i]) !== null && _a !== void 0 ? _a : 0;
        for (var h = 0; h < treeNumbers.length; h++) {
            if (h === i) continue;
            if (
                ((_b = treeNumbers[h]) !== null && _b !== void 0 ? _b : 0) <
                minNum
            ) {
                counterMin += 1;
            } else {
                counterMax += 1;
            }
        }
        temp.push(counterMin);
        temp.push(counterMax);
    }
    var fin = Math.max.apply(Math, temp);
    while (fin > 1) {
        fin = Math.ceil(fin / 2);
        result += 1;
    }
    console.log(result);
    return;
}
TreeLengthCounter(
    '64 27 91 13 47 73 82 5 20 34 55 68 78 88 2 9 17 25 41 50 60 71 80 85 93 0',
); //6
TreeLengthCounter('7 3 2 1 9 5 4 6 8 0'); //4
TreeLengthCounter('42 25 60 15 35 50 70 10 20 30 45 55 65 75 0'); //5
