class MaxStack {
    constructor() {
        this.stack = new Stack();
        this.maxStack = new Stack();
    }

    push(item) {
        this.stack.push(item);
        if (item >= this.maxStack.peek()) {
            this.maxStack.push(item);
        }
    }

    pop() {
        const item = this.stack.pop();
        if (item === this.maxStack.peek()) {
            this.maxStack.pop();
        }
        return item;
    }

    getMax() {
        return this.maxStack.peek();
    }
}