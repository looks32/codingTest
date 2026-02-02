function solution(dot) {
    const [a, b] = dot;
    if (a < 0 && b > 0){
        return 2
    } else if (a > 0 && b > 0){
        return 1
    } else if (a < 0 && b < 0){
        return 3        
    } else {
        return 4
    }
}