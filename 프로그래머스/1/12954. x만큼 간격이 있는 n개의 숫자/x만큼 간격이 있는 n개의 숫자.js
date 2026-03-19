function solution(x, n) {
    const arr = [];
    let num = 0;
    for (let i = 0; i < n; i++) {
        num += x
        arr.push(num);
    }
    return arr
}