function solution(num_list) {
    return num_list.indexOf(Number(num_list.filter((v,i) => v < 0)));
}