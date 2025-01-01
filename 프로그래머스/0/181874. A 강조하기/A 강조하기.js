function solution(myString) {
    var answer = '';
    myString.split('').map((e) => e === 'a' || e === 'A' ? answer += e.toUpperCase() : answer += e.toLowerCase());
    return answer;
}