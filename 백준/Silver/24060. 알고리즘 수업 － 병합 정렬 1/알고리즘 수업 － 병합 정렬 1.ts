const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filepath).toString().trim().split("\n");

const N = Number(input[0].split(" ")[0]);
const K = Number(input[0].split(" ")[1]);
const A = input[1].split(" ").map(Number);

let answer;
let count = 0;

function merge(left, right) {
  let i = 0;
  let j = 0;
  let tmp = [];
    
  while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
          tmp.push(left[i]);
          i++;
      } else {
          tmp.push(right[j]);
          j++;
      }
      
      count++;
      if (count === K) {
       answer = tmp[tmp.length - 1];   
      }
   }
    
  while (i < left.length) {
      tmp.push(left[i]);
      i++;
      count++;
      if (count === K) {
       answer = tmp[tmp.length - 1];   
      }
  }
    
  while (j < right.length) {
      tmp.push(right[j]);
      j++;
      count++;
      if (count === K) {
       answer = tmp[tmp.length - 1];   
      }
  }
    
  return tmp;
}

function merge_sort(A) {
   const r = A.length;
   if (r < 2) {
    return A;
   }
   const q = Math.ceil(r / 2);
   let left = merge_sort(A.slice(0, q));
   let right = merge_sort(A.slice(q, r));
   return merge(left, right);
}

merge_sort(A);

if (!answer) {
    answer = -1;
}

console.log(answer);