function solution(maps) {
    const N = maps.length;
    const M = maps[0].length;
    let visited = Array(N).fill(false).map(e => Array(M).fill(false));
    let dx = [1, -1, 0, 0];
    let dy = [0, 0, 1, -1];
    
    function bfs(x, y) {        
        let queue = [[x,y]];
        visited[x][y] = 1;
        
        while(queue.length) {
            let [cx, cy] = queue.shift();
            for (let i = 0; i < 4; i++) {
                let nx = cx + dx[i];
                let ny = cy + dy[i];
                
                if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
                if (visited[nx][ny]) continue;
                if (maps[nx][ny] === 0) continue;
                
                visited[nx][ny] = visited[cx][cy] + 1;
                queue.push([nx, ny]);
            }
        }
    }
    
    bfs(0, 0);

    return visited[N-1][M-1] ? visited[N-1][M-1] : -1;
}