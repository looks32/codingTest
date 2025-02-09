const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    for(let i = 0; i < line; i++){
        input += '*'.repeat(i + 1) + '\n';
    }
}).on('close', function () {
    console.log(input);
});