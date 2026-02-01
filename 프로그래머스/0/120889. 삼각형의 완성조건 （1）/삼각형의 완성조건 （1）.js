function solution(sides) {
    var answer = 0;
    sides = sides.sort((a,b) => a - b);
    const result = sides[2] < sides[1] + sides[0] ? 1 : 2
    return result;
}