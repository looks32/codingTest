function solution(my_string) {
    var answer = [];
    answer = my_string.trim().split(' ').filter(v => v != "")
    return answer;
}