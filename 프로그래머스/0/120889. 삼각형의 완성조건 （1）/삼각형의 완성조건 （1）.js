function solution(sides) {
    let arr = []
    arr = sides.sort((a, b) => a - b);
    if(arr[0] + arr[1] > arr[2]){
        return 1
    } else {
        return 2
    }
}

