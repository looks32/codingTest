function solution(my_string) {
    var answer = 0;
    my_string = my_string.replace(/[^0-9]/g,'');
    answer = my_string.split('').map(Number).reduce((v,s) => v + s , 0);
    return answer
}