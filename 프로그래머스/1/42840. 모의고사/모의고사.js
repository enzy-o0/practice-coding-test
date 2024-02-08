function solution(answers) {
    var answer = [];
    
    var student1 = [1, 2, 3, 4, 5]
    var student2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    var student1Score = answers.filter((answer, index) => answer === student1[index%student1.length]).length;
    var student2Score = answers.filter((answer, index) => answer === student2[index%student2.length]).length;
    var student3Score = answers.filter((answer, index) => answer === student3[index%student3.length]).length;
    
    var max = Math.max(student1Score, student2Score, student3Score)
    
    if (student1Score === max) { answer.push(1)}
    if (student2Score === max) { answer.push(2)}
    if (student3Score === max) { answer.push(3)}
    
    return answer;
}