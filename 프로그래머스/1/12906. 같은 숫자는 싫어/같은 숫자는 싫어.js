function solution(arr)
{
    var answer = [];

    answer = arr.filter((e, idx) => {        
        if (idx === 0) return true;
        
        if (arr[idx - 1] === e) {
           return false; 
        }
        
        return true;
    })
    return answer;
}