const fs = require('fs');
const [A] = fs.readFileSync(0, 'utf-8').trim().split(' ').map(Number);

console.log(A - 543);