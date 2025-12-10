// 입력 기본 템플릿 (BOJ + 로컬 겸용, CRLF 정리)
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
const a = nums[0];
const b = nums[1];

const d1 = b % 10;
const d2 = Math.floor((b % 100) / 10);
const d3 = Math.floor(b / 100);

console.log(a * d1);
console.log(a * d2);
console.log(a * d3);
console.log(a * b);
