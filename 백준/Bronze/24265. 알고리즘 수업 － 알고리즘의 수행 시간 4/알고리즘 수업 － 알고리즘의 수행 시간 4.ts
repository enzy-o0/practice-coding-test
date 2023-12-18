const input = require('fs').readFileSync(process.platform === "linux" ?"/dev/stdin" : "./input.txt").toString().trim();

console.log(input * (input - 1) / 2);
console.log(2);