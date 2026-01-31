function solution(numbers) {
    numbers.sort((a,b) => a - b);
    const answer =  numbers[numbers.length - 1] * numbers[numbers.length - 2]
    return answer;
}