function solution(my_string) {
    return my_string.split('').sort((a, b) => a.localeCompare(b)).join('').toLowerCase();
}