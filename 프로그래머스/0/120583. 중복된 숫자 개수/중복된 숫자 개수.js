function solution(array, n) {
    var ans = 0;
    array.forEach(arr => arr === n ? ans++ : '') ;
    return ans;
}