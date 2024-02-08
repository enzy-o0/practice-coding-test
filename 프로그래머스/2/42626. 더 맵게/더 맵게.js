class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }
    
    peek() {
        return this.heap[0];
    }
    
    push(element) {
        this.heap.push(element);
        this.bubbleUp();
    }
    
    bubbleUp() {
        let idx = this.heap.length - 1;
        const element = this.heap[idx];
        
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.heap[parentIdx];
            
            if (parent <= element) break;
            this.heap[idx] = parent;
            this.heap[parentIdx] = element;
            idx = parentIdx;
        }
    }
    
   pop() {
       if (this.heap.length === 0) return null;
       if (this.heap.length === 1) return this.heap.pop();
       const min = this.heap[0];
       const end = this.heap.pop();
       
       this.heap[0] = end;
       this.sinkDown();

       return min;
   }
    
   sinkDown() {
       let idx = 0;
       const length = this.heap.length;
       const element = this.heap[0];
       
       while(true) {
           let leftChildIdx = 2 * idx + 1;
           let rightChildIdx = 2 * idx + 2;
           let leftChild, rightChild;
           let swap = null;
           
           if (leftChildIdx < length) {
            leftChild = this.heap[leftChildIdx];
            if (leftChild < element) {
              swap = leftChildIdx;
            }
          }

          if (rightChildIdx < length) {
            rightChild = this.heap[rightChildIdx];
            if (
              (swap === null && rightChild < element) ||
              (swap !== null && rightChild < leftChild)
            ) {
              swap = rightChildIdx;
            }
          }

          if (swap === null) break;
          this.heap[idx] = this.heap[swap];
          this.heap[swap] = element;
          idx = swap;
       }
   }
}

function solution(scoville, K) {
    let answer = 0;
    const heap = new MinHeap();
    
    for (const value of scoville) {
        heap.push(value);
    }
    
    while (heap.size() >= 2 && heap.peek() < K) {
        const first = heap.pop();
        const second = heap.pop();
        const sum = first + (second * 2);
        heap.push(sum);
        answer++;
    }
    
    return heap.peek() >= K ? answer : -1;
}


// function solution(scoville, K) {
//     let answer = 0;
    
//     scoville.sort((a,b) => b - a);
//     while(scoville[0] < K) {
//         if (scoville.length <= 2) {
//             answer = -1;
//             return;
//         }
//         scoville.sort((a,b) => b - a);        
//         const current = scoville.pop();
//         const next = scoville.pop();
//         const sum = current + next * 2;
//         scoville.push(sum);
//         answer++;
//     }
   
//     return answer;
// }
