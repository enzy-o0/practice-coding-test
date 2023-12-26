const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filepath).toString().trim().split("\n");

const N = input.shift();

let answer;
function recursion(s, l, r) {
    answer++;
    if (l >= r) return 1;
    if (s[l] != s[r]) return 0;
    
    return recursion(s, l+1, r-1);
}

function isPalindrome(s) {
    return recursion(s, 0, s.length - 1);
}

for (let i = 0; i < N; i++) {
   answer = 0;
   console.log(`${isPalindrome(input[i])} ${answer}`);
}

