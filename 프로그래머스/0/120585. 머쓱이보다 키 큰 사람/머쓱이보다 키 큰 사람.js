function solution(array, height) {
    var answer = 0;
    array.forEach((arr) => arr > height ? answer += 1 : null )
    return answer;
}