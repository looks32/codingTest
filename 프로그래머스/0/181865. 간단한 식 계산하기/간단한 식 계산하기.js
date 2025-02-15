function solution(binomial) {
    let answer = binomial.split(' ')
    if(answer[1] == "+"){
        return Number(answer[0]) + Number(answer[2])
    }else if(answer[1] == "-"){
        return answer[0] - answer[2]
    }else if(answer[1] == "*"){
        return answer[0] * answer[2]
    }
}