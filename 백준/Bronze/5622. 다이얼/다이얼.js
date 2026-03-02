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
const word = lines[0];

let sum = 0;

for (const char of word) {
  if (char <= 'C') sum += 3;
  else if (char <= 'F') sum += 4;
  else if (char <= 'I') sum += 5;
  else if (char <= 'L') sum += 6;
  else if (char <= 'O') sum += 7;
  else if (char <= 'S') sum += 8;
  else if (char <= 'V') sum += 9;
  else sum += 10;
}

console.log(sum);
