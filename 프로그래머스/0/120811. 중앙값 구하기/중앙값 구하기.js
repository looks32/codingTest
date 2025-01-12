function solution(array) {
    let arr = array.sort((a, b) => a - b);
    let i = Math.floor(arr.length / 2);
    return array[i];
}