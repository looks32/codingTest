function solution(array, height) {
    var answer = 0;
    answer = array.filter((v) => height < v).length;
    return answer;
}