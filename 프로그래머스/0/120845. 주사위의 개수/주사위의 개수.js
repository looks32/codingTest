function solution(box, n) {
    var answer;
    const a = box.map((value) => value / n);
    answer = a.reduce((value, arr) => Math.floor(value) * Math.floor(arr))
    return answer;
}
