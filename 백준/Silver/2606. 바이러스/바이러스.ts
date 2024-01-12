const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filepath).toString().trim().split("\n");

const computerTotalCount = Number(input.shift());
const addEdge = Number(input.shift());

const vertexes = {};

for (let i = 0; i < computerTotalCount + 1; i++) {
    vertexes[i] = [];
}
 
while (input.length > 0) {
    const [vertex1, vertex2] = input.shift().split(" ").map(Number);
    vertexes[vertex1].push(vertex2);
    vertexes[vertex2].push(vertex1);
}

let count = 0;
let visited = {};

function dfs(startVertex) {
    if (!startVertex) return;
    visited[startVertex] = true;
    vertexes[startVertex].forEach(neighbor => {
        if (visited[neighbor]) return;
        count++;
        return dfs(neighbor);
    });
    
}
dfs(1);
console.log(count);