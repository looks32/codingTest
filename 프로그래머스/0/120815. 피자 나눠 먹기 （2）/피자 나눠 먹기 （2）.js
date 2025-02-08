function solution(n) {
    for(let i = 1; i <= n; i++){
        if(Number.isInteger(i * 6 / n)){
            return i
        }
    }
}