function solution(num_list) {
    let even = 0;
    let odd = 0;
    num_list.map((v,i) => i % 2 == 0 ? even += v : odd += v)
    if(even < odd){
        return odd
    } else {
        return even
    }
}