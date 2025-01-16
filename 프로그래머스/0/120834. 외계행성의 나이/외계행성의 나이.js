function solution(age) {
    let answer = '';
    const alien = ['a','b','c','d','e','f','g','h','i','j'];
    const num = String(age).split('');
    for(let i = 0; i<num.length; i++){
        answer += alien[Number(num[i])];
    }
    return answer;
}