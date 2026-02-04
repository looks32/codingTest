function solution(n) {
    var answer = 0;
    n = String(n).split("");
    answer = n.reduce((v,n)=> Number(v) + Number(n) ,0)
    return answer;
}