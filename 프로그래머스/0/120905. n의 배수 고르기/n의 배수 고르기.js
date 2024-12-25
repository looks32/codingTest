function solution(n, numlist) {
    var answer = [];
    numlist.forEach(arr => (arr % n === 0) && answer.push(arr));
    return answer;
}