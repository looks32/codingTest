function solution(my_string) {
    var answer = 0;
    let regex = /[^0-9]/g;
    let result = my_string.replace(regex, "")
    result.split('').forEach((e) => answer += Number(e))
    return answer;
}