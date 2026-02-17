function solution(n, control) {
    let answer = n;
    for (const c of control) {
        switch (c) {
            case 'w':
                answer += 1;
                break;
            case 's':
                answer -= 1;
                break;
            case 'd':
                answer += 10;
                break;
            case 'a':
                answer -= 10;
                break;
        }
    }
    return answer;
}