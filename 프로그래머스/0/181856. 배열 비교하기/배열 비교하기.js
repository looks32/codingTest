function solution(arr1, arr2) {
    let answer = 0
    if(arr1.length === arr2.length){
        const a = arr1.reduce((a,b) => a+b,0)
        const b = arr2.reduce((a,b) => a+b,0)
        if(a > b){
            answer = 1
        }else if(a == b){
            answer = 0
        }else {
            answer = -1
        }
    } else {
        if(arr1.length < arr2.length) {
            answer = -1
        }else{
            answer = 1
        }
    }
    return answer
}