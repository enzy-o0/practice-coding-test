const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filepath).toString().trim().split("\n");

const n = input[0];
let nNum = -1;
let answer = 0;

while(nNum <= n) {
    nNum++;
    const nSum = nNum.toString().split("").reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0); 
    if (n == nNum + nSum) {
      answer = nNum;
      break;
    }
}

console.log(answer);