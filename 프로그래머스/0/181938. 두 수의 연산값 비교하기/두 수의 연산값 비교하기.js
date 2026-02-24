function solution(a, b) {
    const case1 = String(a) + String(b);
    const case2 = 2 * a * b;
    
    if(case1 > case2){
        return Number(case1)
    } else if (case1 < case2) {
        return case2
    } else {
        return Number(case1);
    }
}