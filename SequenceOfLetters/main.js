'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var export_js_1 = require('./export.js');
function sequenceOfLetters(input) {
    var numberArray = input.split(' ').map(function (s) {
        return +s;
    });
    numberArray.splice(0, 1);
    var alphaviteCopy = export_js_1.alphavite.split(' ');
    var result = {};
    var count = 0;
    for (var i = 0; i < numberArray.length; i++) {
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
sequenceOfLetters('2 3 4');
sequenceOfLetters('3 1 1 1');
