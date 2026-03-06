"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var export_1 = require("./export");
function synonymFinder(enter) {
    var group = enter.split(' ');
    group.splice(0, 1);
    var findingWord = group.splice(group.length - 1, 1);
    for (var i = 0; i < group.length; i++) {
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
synonymFinder(export_1.enter);
