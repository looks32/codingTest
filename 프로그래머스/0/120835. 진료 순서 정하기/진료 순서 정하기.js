function solution(emergency) {
    var answer = [];
    const sorted = [...emergency].sort((a, b) => b - a);
    answer = emergency.map((arr)=> sorted.indexOf(arr)  + 1)
    return answer;
}