function solution(my_string, alp) {
    var answer = '';
    my_string.split('').forEach((e)=> e === alp ? answer += e.toUpperCase() : answer += e);
    return answer;
}