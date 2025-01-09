function solution(my_string, overwrite_string, s) {
    let start = my_string.substring(0,s)
    let end = my_string.substring(overwrite_string.length + s, my_string.length)
    return answer = start + overwrite_string + end;
}


//const start = text.substring(0, 7); // "Hello, "
//const end = text.substring(12);    // "!"

//const newText = start + "JavaScript" + end;