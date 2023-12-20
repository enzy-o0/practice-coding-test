const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filepath).toString().trim().split("\n");

const splitNM = input[0].split(" ");
let n = Number(splitNM[0]);
let m = Number(splitNM[1]);

const nNumArr = input[1].split(" ");

let closestTotal = 0;

for(let i = 0; i < n - 2; i++) {
  for(let j = i + 1; j < n - 1; j++) {
      for(let k = j + 1; k < n; k++) {
          const total = Number(nNumArr[i]) + Number(nNumArr[j])+ Number(nNumArr[k]);
          
          if (m >= total && total > closestTotal) {
              closestTotal = total;
          }
      }
  }
}

console.log(closestTotal);