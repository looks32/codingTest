function solution(my_string, n) {
    var answer = '';
    const max = my_string.length
    const min = max - n 
    answer = my_string.slice(min,max);
    return answer;
}