function solution(array) {
    var answer = [];
    const array2 = [...array].sort((a,b) => a - b);
    const result = array2[array.length - 1]
    return [result, array.indexOf(result)];
}