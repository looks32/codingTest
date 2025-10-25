function solution(n) {
    let pizza = 1;
    
    for(let i = 1; i <= n; i++){
        if(6 * pizza % n === 0){
            return pizza
        }
        pizza++;
    }
}