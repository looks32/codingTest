function solution(money) {
    var answer = [];
    const ea = Math.floor(money / 5500);
    const total = money - (ea * 5500)
    answer.push(ea, total)
    
    return answer;
}