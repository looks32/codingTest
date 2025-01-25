function solution(rsp) {
    var answer = '';
    rsp.split('').forEach((v) => {
        if(v == '2'){
            answer += 0
        }else if(v == '0') {
            answer += 5
        }else {
            answer += 2
        }                     
    })
    return answer;
}