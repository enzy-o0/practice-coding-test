const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim();
const N = Number(input);

let queens = new Array(N + 1).fill(0);
let count = 0;

function checkCondition(row) {
    for (let i = 0; i < row; i++) {
        if (queens[i] === queens[row]) return false;
        if (Math.abs(queens[i] - queens[row]) === Math.abs(i - row)) return false;
    }
    
    return true;
}

function dfs(row) {
    if (row === N) {
        count++;
        return;
    } 
    
    
    for (let j = 0; j < N; j++) {
        queens[row] = j;
        if (checkCondition(row)) {
            dfs(row + 1);
        }
    }  
}

dfs(0);
console.log(count);