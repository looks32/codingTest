function solution(arr, k) {
    var answer = [];
    arr.forEach((arr)=>{
        if(k % 2 === 0){
            answer.push(arr + k)
        }else {
            answer.push(arr * k)
        }
    })
    return answer;
}