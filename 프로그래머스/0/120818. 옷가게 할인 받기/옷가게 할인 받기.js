function solution(price) {
    var answer = 0;
    
    if(price  >= 500000){
        answer = Math.floor(price * (1 - 20 / 100))
    }else if (price >= 300000){
        answer = Math.floor(price * (1 - 10 / 100))
    } else if (price >= 100000){
        answer = Math.floor(price * (1 - 5 / 100))
    } else {
        answer = price
    }
    
    return answer;
}