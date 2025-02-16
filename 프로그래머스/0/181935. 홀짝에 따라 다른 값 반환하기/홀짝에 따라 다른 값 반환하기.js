function solution(n) {
    var answer = 0;
    if(n % 2 === 0){
       for(let i = 0; i<=n; i += 2){
           answer += i ** 2;
       }
    }else{
        for(let t = 0; t<=n; t++){
            if(t % 2 != 0){
                answer += t
            }
        }
    }
    
    return answer
}