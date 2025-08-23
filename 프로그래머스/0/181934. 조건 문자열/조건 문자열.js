function solution(ineq, eq, n, m) {
    var answer = 0;
    var sign = ineq+eq;
    
    if(sign == '<='){
        if(n <= m){
            return 1 
        } else {
            return 0
        }
    }
    
    if(sign == '>='){
        if(n >= m){
            return 1 
        } else {
            return 0
        }
    }
    
    if(sign == '>!'){
        if(n > m){
            return 1 
        } else {
            return 0
        }
    }
    
    if(sign == '<!'){
        if(n < m){
            return 1 
        } else {
            return 0
        }
    }
    
    
}