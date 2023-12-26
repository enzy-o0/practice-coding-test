const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filepath).toString().trim();

const N = Number(input);
function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(N));

