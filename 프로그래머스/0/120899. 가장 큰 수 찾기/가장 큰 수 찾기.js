function solution(array) {
    let answer = [];
    let index;
    const max = Math.max(...array);
    for(let i = 0; i<array.length; i++){
        if(array[i] === max){
            index = i
        }
    }
    
    answer = [max, index]
    
    return answer;
}