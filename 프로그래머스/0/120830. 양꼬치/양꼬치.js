function solution(n, k) {
    var answer = 0;
    const service = parseInt(n / 10);
    answer = (n * 12000) + (k * 2000) - (service * 2000);
    return answer;
}