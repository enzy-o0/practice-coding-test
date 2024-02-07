function solution(s){
    let answer = true;
    let totalCount = 0;
    
    for (const ele of s) {
        totalCount += ele === "(" ? 1 : -1;
        if (totalCount < 0) return answer = false;
    }
    
    return totalCount === 0;
}