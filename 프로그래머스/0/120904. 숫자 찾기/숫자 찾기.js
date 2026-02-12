function solution(num, k) {
    const arr = String(num).split("").map(Number).indexOf(k);
    return arr >= 0 ? arr + 1  : -1 
}    