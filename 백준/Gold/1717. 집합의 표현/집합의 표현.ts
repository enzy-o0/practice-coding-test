//const fs = require("fs");
//const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    solution(input);
    process.exit();
});

function solution(input) {
    const [N, M] = input.shift().split(" ").map(Number);
    let parent = [];
    
    for (let i = 0; i <= N; i++) {
        parent[i] = i;
    }

    function findRoot(x) {
        if (parent[x] === x) return x;
        parent[x] = findRoot(parent[x]);
        return parent[x];
    }

    for (let j = 0; j < M; j++) {
        const [operator, A, B] = input[j].split(" ").map(Number);
        let aRoot = findRoot(A);
        let bRoot = findRoot(B);
    
        if (operator === 0) {
            if (aRoot !== bRoot) {
                if (aRoot < bRoot) {
                    parent[bRoot] = aRoot;
                    findRoot(B);
                } else {
                    parent[aRoot] = bRoot;
                    findRoot(A);
                }
            }
        } else {
            if (aRoot === bRoot) {
                console.log('YES');
            } else {
                console.log('NO');
            }
        }
    }
}
