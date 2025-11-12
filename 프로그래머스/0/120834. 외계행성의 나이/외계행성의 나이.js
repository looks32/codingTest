function solution(age) {
    var answer = '';
    age = String(age).split('')
    answer = age.map((a)=> String.fromCharCode(97 + Number(a))).join('')
    return answer;
}