function solution(array) {
    const middle = Math.round(array.length / 2);
    var answer = array.sort((a,b) => a - b);
    return answer[middle-1];
}