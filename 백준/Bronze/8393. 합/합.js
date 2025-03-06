const fs = require('fs');
const [A] = fs.readFileSync(0, 'utf-8').trim().split(' ').map(Number);
let total = 0;
for(let i=1; i<=A; i++){
    total += i;
}
console.log(total);