"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var export_1 = require("./export");
function minimumFinder(enter) {
    var input = enter.split(' ');
    input.splice(0, 1);
    var condition = +input.splice(0, 1);
    for (var i = 0; i < input.length; i++) {
        if (i + condition - 1 < input.length) {
            var temp = input.slice(i, i + condition).map(function (s) { return +s; });
            console.log(Math.min.apply(Math, temp));
        }
    }
    return;
}
minimumFinder(export_1.enter);
