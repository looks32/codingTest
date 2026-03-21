function solution(numbers) {
    const arr = [0,1,2,3,4,5,6,7,8,9];
    const result = arr.filter(v => !numbers.includes(v));
    return result.length === 0 ? arr.reduce((a,c) => a + c ,0) : result.reduce((a,c) => a + c ,0);
}