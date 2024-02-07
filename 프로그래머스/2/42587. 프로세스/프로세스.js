function solution(priorities, location) {
  const list = priorities.map((priority, i) => ({
      myTurn : i === location,
      priority,
  }));
    
    let count = 0;
    while(true) {
        var cur= list.shift();
        if (list.some(item => item.priority > cur.priority)) {
            list.push(cur);
        } else {
            count++;
            if (cur.myTurn) return count;
        }
    }
}