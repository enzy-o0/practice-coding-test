const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filepath).toString().trim().split("\n");

let spltInput = input[0].trim().split(' ');
let a1 = Number(spltInput[0]);
let a0 = Number(spltInput[1]);
let c = Number(input[1]);
let n0 = Number(input[2]);

if ((a1 * n0) + a0 <= c * n0 && a1 <= c) {
    console.log(1);
} else {
    console.log(0);
}