'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var export_1 = require('./export');
function decoder(input) {
    var temp = [];
    var result = '';
    var spaceCount = 0;
    for (var i = 0; i < input.length; i++) {
        var char = input[i];
        if (char === '-' || char === '.') {
            temp.push(char);
            spaceCount = 0;
        } else if (char === ' ') {
            spaceCount++;
            if (spaceCount === 1) {
                var key = temp.join('');
                if (export_1.morse[key]) {
                    result += export_1.morse[key];
                }
                temp = [];
            } else if (spaceCount === 3) {
                var key = temp.join('');
                if (export_1.morse[key]) {
                    result += export_1.morse[key];
                }
                result += ' ';
                temp = [];
                spaceCount = 0;
            }
        }
    }
    if (temp.length > 0) {
        var key = temp.join('');
        if (export_1.morse[key]) {
            result += export_1.morse[key];
        }
    }
    return result.trim();
}
console.log(decoder('.... . .-.. .-.. ---   .-- --- .-. .-.. -.. -.-.--'));
