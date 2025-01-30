function solution(numbers) {
    let answer = 0;
    let arr = numbers.sort((a, b) => a - b);
    let lang = arr.length
    answer = Number(arr[lang-1] * arr[lang-2])
    return answer
}