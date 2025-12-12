const fs = require('fs');
const path = require('path');

const src =
  process.platform === 'linux'
    ? 0
    : process.env.LOCAL_INPUT || path.join(__dirname, 'input.txt');
const raw = fs.readFileSync(src, 'utf8').replace(/\r/g, '').trim();

const lines = raw.split('\n'); // 줄 단위가 필요할 때
const tokens = raw.split(/\s+/); // 공백 단위가 필요할 때
const nums = tokens.map(Number); // 전부 숫자면 이 한 줄로도 OK

// --- 여기부터 풀이 ---
let if1 = nums[0] % 4;
let if2 = nums[0] % 100;
let if3 = nums[0] % 400;

if (if1 === 0 && (if2 !== 0 || if3 === 0)) {
  console.log(1);
} else {
  console.log(0);
}