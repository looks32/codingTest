function solution(strArr) {
    const arr =  strArr.map((v) => v.length);
    
    const length = arr.reduce((acc, v) => {
      acc[v] = (acc[v] || 0) + 1;
      return acc;
    }, {});
    
    return Math.max(...Object.values(length));
}