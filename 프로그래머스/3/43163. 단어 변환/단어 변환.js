function solution(begin, target, words) {
    let visited = {};
    let queue = [begin];
    visited[begin] = 0;
    
    if(!words.includes(target)) return 0;
        
    while(queue.length) {
        const currentWord = queue.shift();
        if (target === currentWord) break;
        words.forEach(word => {
            if (visited[word]) return;
            if (!compareWord(word, currentWord)) return;
            visited[word] = visited[currentWord] + 1;
            queue.push(word);
        });
    }
    
    function compareWord(w1, w2) {
        let count = 0;  
        
        for(let i = 0; i < w1.length; i++) {
          if(w1[i] !== w2[i]) count++;
        }
        
        return count === 1 ? true : false; 
    }
        
    return visited[target] ? visited[target] : 0;
}