function solution(array) {
    var answer = [];
    var frequency = {};
    
    array.sort((a, b) => a - b);

    for (let i = 0; i < array.length; i++) {
        if (array.length == 1) {
            return array[i];
        }
        
        frequency[array[i]] = (frequency[array[i]] || 0) + 1;
        
        if (array[i] == array[i - 1]) {
            answer.push(array[i]);
        }
    }

    let maxCount = Math.max(...Object.values(frequency));
    let mode = Object.keys(frequency).filter(key => frequency[key] === maxCount);

    return mode.length === 1 ? Number(mode[0]) : -1;
}