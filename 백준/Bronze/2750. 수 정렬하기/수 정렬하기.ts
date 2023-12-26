const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filepath).toString().trim().split("\n");

const Lgth = input.shift();
input.sort((a, b) => a - b);

for (let i = 0; i < Lgth; i++) {
    console.log(input[i]);
}

