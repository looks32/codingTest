function solution(n, k) {
    var answer = 0;
    let drink = 2000;
    let meet = 12000;
    let service = Math.floor(n / 10);
    answer = n * meet + k * drink - service * drink;
    return answer;
}