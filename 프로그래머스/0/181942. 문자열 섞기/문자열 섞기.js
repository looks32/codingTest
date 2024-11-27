function solution(str1, str2) {
    var answer = '';

    for(i=0; i<str1.length; i++){
        
        if(i<str1.length){
            answer += str1[i]
        }
        
        if(i<str2.length){
            answer += str2[i]
        }
    }

    return answer;
}