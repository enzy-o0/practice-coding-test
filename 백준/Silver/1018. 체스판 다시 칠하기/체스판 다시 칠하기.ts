const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filepath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ");

let answerCnt = 8 * 8;
const line = ['WBWBWBWB', 'BWBWBWBW'];

function paint(x, y) {
    let repaintWhite = 0;
    let repaintBlack = 0;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (input[i + x][j + y] !== line[i % 2][j]) {
                repaintWhite++;
            }
            
             if (input[i + x][j + y] !== line[(i+1) % 2][j]) {
                repaintBlack++;
            }
        }
    }
    return Math.min(repaintWhite, repaintBlack);
}

for (let i = 0; i <= N - 8; i++) {
    for (let j = 0; j <= M - 8; j++) {
       
        const cnt = paint(i, j);
        
        if (cnt < answerCnt) {
            answerCnt = cnt;
        }
    }
}

console.log(answerCnt);

