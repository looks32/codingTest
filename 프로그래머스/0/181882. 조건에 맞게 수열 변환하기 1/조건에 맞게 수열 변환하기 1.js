function solution(arr) {
    var answer = [];
    arr.forEach((v)=>{
        if(v % 2 == 0 && v >= 50){
            answer.push(v/2)
        } else if(v % 2 != 0 && v <= 50){
            answer.push(v*2)
        } else {
            answer.push(v)
        }
    })
    return answer;
}