function solution(my_string) {
    var answer = '';
    var arr = my_string.split('')
    for(let i = 0; i <arr.length; i++){
        if(arr[i].match(new RegExp(/^[A-Z]/))){
            answer += arr[i].toLowerCase();
        }else{
            answer += arr[i].toUpperCase();
        }
    }
    return answer;
}