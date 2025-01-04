function solution(strArr) {
    var answer = [];
    strArr.map((e, i) => i % 2 == 0 ? answer.push(e.toLowerCase()) : answer.push(e.toUpperCase()))
    return answer;
}

