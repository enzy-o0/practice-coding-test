const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filepath).toString().trim().split("\n");

const [N, M, K] = input.shift().split(" ").map(Number);
let vertexed = new Array(N + 1);

for (let i = 0; i < vertexed.length; i++) {
  vertexed[i] = [];
}

while(input.length > 0) {
    const vertex = input.shift().split(" ").map(Number);
    
    vertexed[vertex[0]].push(vertex[1]);
    vertexed[vertex[1]].push(vertex[0]);
    
    vertexed[vertex[0]].sort((a, b) => a - b);
    vertexed[vertex[1]].sort((a, b) => a - b);
}
let resultDfs = [];
let visitedDfs = {};

function dfs(startVertex) {   
    if(!startVertex) return;
    visitedDfs[startVertex] = true;
    resultDfs.push(startVertex);
    
    vertexed[startVertex].forEach(neighbor => {
        if (visitedDfs[neighbor]) return;
        return dfs(neighbor);
    });
    
    return resultDfs.join(" ");
}

function bfs(startVertex) {
    let result = [];
    let queue = [startVertex];
    let visited = {};
    let currentVertex;
    visited[startVertex] = true;
    
    while (queue.length > 0) {
        currentVertex = queue.shift();
        result.push(currentVertex);
        
        vertexed[currentVertex].forEach(neighbor => {
            if (visited[neighbor]) return;
            visited[neighbor] = true;
            queue.push(neighbor);
        })
    }
    
    return result.join(" ");
}

console.log(dfs(K));
console.log(bfs(K));