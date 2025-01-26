function solution(my_string, num1, num2) {
    var answer = '';
    my_string.split('').map((v,i) => {
        if(i == num1){
            answer += my_string[num2]
        }else if(i == num2){
            answer += my_string[num1]
        }else {
            answer += v
        }
    })
    return answer;
}