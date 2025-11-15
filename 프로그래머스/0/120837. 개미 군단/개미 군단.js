function solution(hp) {
    var answer = 0;
    let temp = hp;
    
    let ants = [5, 3, 1]
    
    for(let i = 0; i <= ants.length; i++){
            
        hp = hp - Math.floor(hp / ants[i]) * ants[i];
        answer += Math.floor(temp / ants[i]);
        
        temp = hp
        
        if(hp === 0){
            return answer;
        }
        
       
    }
    
    
    return answer;
}