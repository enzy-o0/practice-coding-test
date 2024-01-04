const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filepath).toString().trim().split("\n").map(Number);

let answer = [];
function dfs(start, length) {
    if (length < 3) {
        return;
    }
        
    for (let i = start + (length / 3); i < start + (length / 3) * 2; i++) {
        answer[i] = ' '
    }
    
    dfs(start, length / 3);
    dfs(start + (length / 3) * 2, length / 3);
}

for (let i = 0; i < input.length; i++) {
    const cnt = Math.pow(3, input[i]);
    answer = [];
    for(let i = 0; i < cnt; i++) {
        answer.push('-');
    }
    
    dfs(0, cnt);
    
    console.log(answer.join(''));
}