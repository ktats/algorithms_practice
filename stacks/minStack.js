class Stack {
    constructor() {
        this.storage = [];
        this.minStorage = [];
    }

    insert(value) {
        if (value <= this.minStorage.peek() || this.minStorage.peek == null) {
            this.minStorage.push(value);
        }
        this.storage.push(value);
    }

    pop() {
        let removed = this.storage.pop();
        if (removed === this.minStorage.peek()) {
            this.minStorage.pop();
        }
        return removed;
    }

    peek() {
        return this.storage.peek();
    }
}