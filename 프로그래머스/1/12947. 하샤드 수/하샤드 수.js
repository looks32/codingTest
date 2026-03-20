function solution(x) {
    const result = x % x.toString().split('').reduce((a,c) => a + Number(c), 0) 
    return !result ? true : false;
}