function solution(my_string) {
    const arr = ['a', 'e', 'i', 'o', 'u'];
    var answer = my_string.split('').filter((v) => !arr.includes(v));
    return answer.join('');
}