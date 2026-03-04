function solution(num_list) {
    const last = num_list[num_list.length - 1];
    const lastPrev = num_list[num_list.length - 2];
    last > lastPrev ? num_list.push(last - lastPrev) : num_list.push(last * 2)
    return num_list;
}