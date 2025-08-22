function solution(myString) {
    var answer = '';
    myString.split('').forEach((value)=>{
        if(value.charCodeAt() < 108){
            answer += 'l';
        } else {
            answer += value;
        }
    })
    return answer;
}