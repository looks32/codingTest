function solution(num_list, n) {
    var answer = 0;
    answer = num_list.filter((e) => e == n)
    answer.length > 0 ? answer = 1 : answer = 0;
    return answer;
}