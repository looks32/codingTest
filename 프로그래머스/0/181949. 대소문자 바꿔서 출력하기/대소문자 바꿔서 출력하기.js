const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let result = '';
    
    function isUpperCase(str) {
      return str === str.toUpperCase();
    }
    
    for(i=0; i<str.length; i++){
        
        if(isUpperCase(str[i])){
            result += str[i].toLowerCase();
        } else{
            result += str[i].toUpperCase();
        }
       
    }
    
    console.log(result)
});