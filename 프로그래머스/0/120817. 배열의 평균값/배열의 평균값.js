function solution(numbers) {
    var ans = 0;
    for(let i=0; i<numbers.length; i++){
       ans += numbers[i] 
    }
    ans =  ans / numbers.length
    return ans;
}