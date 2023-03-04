// Q2.Implement a last -in -first - out(LIFO) stack using only two queues.
// The implemented stack should support all the functions of a normal stack(push, top, pop, and empty).

class Stack {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    push(x) {
        this.queue1.push(x);
    }

    pop() {
        if (this.empty()) {
            return null;
        }
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }
        let x = this.queue1.shift();
        [this.queue1, this.queue2] = [this.queue2, this.queue1];
        return x;
    }

    top() {
        if (this.empty()) {
            return null;
        }
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }
        let x = this.queue1.shift();
        this.queue2.push(x);
        [this.queue1, this.queue2] = [this.queue2, this.queue1];
        return x;
    }

    empty() {
        return this.queue1.length === 0;
    }
}

// Example usage
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.top()); // Output: 3
console.log(stack.pop()); // Output: 3
console.log(stack.top()); // Output: 2
console.log(stack.empty()); // Output: false
