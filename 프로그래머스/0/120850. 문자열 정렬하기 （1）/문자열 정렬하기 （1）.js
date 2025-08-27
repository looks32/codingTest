function solution(my_string) {
    var answer = [];
    var arr = []
    
    arr = my_string.replace(/[^0-9]/g, "");
    answer = arr.split("").map(Number).sort((a,b) => a - b);
    
    return answer;
}