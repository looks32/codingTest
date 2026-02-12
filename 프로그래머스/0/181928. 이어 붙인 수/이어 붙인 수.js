function solution(num_list) {
    const even = num_list.filter((v) => v % 2 !== 0).join('');
    const odd = num_list.filter((v) => v % 2 === 0).join('');
    return +even + +odd;
}