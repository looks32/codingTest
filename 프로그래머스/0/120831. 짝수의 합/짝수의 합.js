function solution(n) {
    var answer = 0;
    var arr = [];
    for(let i = 0; i <= n; i++){
        if(i % 2 == 0){
            arr.push(i)
        }
    }
    answer = arr.reduce((a,b) => a + b, 0) 
    return answer;
}
