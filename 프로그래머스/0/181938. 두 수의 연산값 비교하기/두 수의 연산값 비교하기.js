function solution(a, b) {
    var answer = 0;
    
    if( String(a) + String(b) < 2 * a * b){
        answer =  2 * a * b
    } else {
        answer = Number(String(a) + String(b))
    }
    
    return answer;
    
    
}