const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filepath).toString();
const N = Number(input);

let queens = [];
let count = 0;

function checkCondition(x, y) {
    for (const [a, b] of queens) {
        if (a === x || b === y) return false;
        if (Math.abs(a - x) === Math.abs(b - y)) return false;
    }
    
    return true;
}

function dfs(row) {
    if (row === N) {
        count++;
        return;
    }
    
    for (let j = 0; j < N; j++) {
        if (!checkCondition(row, j)) continue;
        queens.push([row, j]);
        dfs(row + 1);
        queens.pop();
    }
}

dfs(0);
console.log(count);