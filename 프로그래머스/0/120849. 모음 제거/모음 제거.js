function solution(my_string) {
    var answer = '';
    const gather = ['a','e','i','o','u']
    answer = my_string.split('').filter((v) => !gather.includes(v)).join('');
    return answer
}