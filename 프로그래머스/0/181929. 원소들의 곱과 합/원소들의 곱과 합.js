function solution(num_list) {
    let a = 1;
    let b = 0;
    num_list.forEach((v) => a *= v);
    num_list.forEach((v) => b += v);
    if(a < Math.pow(b,2)){
        return 1
    }
    return 0;
}