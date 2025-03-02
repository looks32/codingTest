const fs = require('fs');
const [A] = fs.readFileSync(0, 'utf-8').trim().split(' ').map(Number);

if (A >= 90) {
   console.log('A');
} else if (A >= 80) {
   console.log('B');
} else if (A >= 70) {
   console.log('C');
} else if (A >= 60) {
   console.log('D');
} else {
   console.log('F');
}