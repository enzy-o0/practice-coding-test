const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filepath).toString().trim().split("\n");

const N = Number(input[0]);
let answer = 666;
let idx = 1;
while (idx !== N) {
    answer++;
    if (String(answer).includes("666")) idx++;
}

console.log(answer);