function solution(price, money, count) {
    let charge = 0;
    let total = 0;
    
    for(let i = 1; i <= count; i++){
        charge = i * price;
        total += charge;
    }
    
    return money - total < 0 ? total - money : 0 
}