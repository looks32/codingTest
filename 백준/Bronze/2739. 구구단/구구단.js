const fs = require('fs');
const [A] = fs.readFileSync(0, 'utf-8').trim().split(' ').map(Number);

for (let i = 1; i <= 9; i++) {
    console.log(`${A} * ${i} = ${A * i}`);
}