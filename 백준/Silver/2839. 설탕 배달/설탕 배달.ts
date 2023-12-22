const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filepath).toString().trim().split("\n");

let N = Number(input);
let answer = 0;

while (true) {
  if (N % 5 === 0) {
    answer += N / 5
    break;
  }

  N -= 3;
  answer += 1;

  if (N < 0) {
    answer = -1;
    break;
  }
}

console.log(answer);
