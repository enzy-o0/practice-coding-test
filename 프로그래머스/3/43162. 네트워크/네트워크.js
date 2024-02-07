function solution(n, computers) {
    let answer = 0;
    let visited = Array(n).fill(false);
    
    function dfs(i) {
        visited[i] = true;
        for (let j = 0; j < n; j++) {
            if (visited[j]) continue;
            
            if (computers[i][j] === 1) {
                dfs(j);
            }
        }
    }
    
  for (let k = 0; k < n; k++) {
        if (visited[k]) continue;   
        dfs(k);
        answer++;
   }
    
    return answer;
}