const fs = require('fs');
const [A] = fs.readFileSync(0, 'utf-8').trim().split(' ').map(String);

console.log(A+'??!');