const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filepath).toString().trim().split(" ");

const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);
const d = Number(input[3]);
const e = Number(input[4]);
const f = Number(input[5]);

let y = ((c * d) - (a * f)) / ((d * b) - (a * e));
let x = ((c * e) - (b * f)) / ((a * e) - (b * d));

console.log(x + " " + y);
