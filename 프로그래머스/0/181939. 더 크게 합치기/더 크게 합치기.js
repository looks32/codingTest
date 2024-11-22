function solution(a, b) {
    var answer = 0;
    let a1 = String(a)
    let b1 = String(b)
    
    if(a1 + b1 > b1 + a1){
        answer = Number(a1 + b1) 
    } else if (a1 + b1 == b1 + a1){
         answer = Number(a1 + b1) 
    }
    else {
        answer = Number(b1 + a1)
    } 
    
    return answer;
}