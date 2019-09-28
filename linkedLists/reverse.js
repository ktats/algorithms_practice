function reverse(head) {
    let node = head;
    let temp;
    let previous;
    while (node) {
        temp = node.next;
        node.next = previous;
        previous = node;
        node = temp;
    }
    return previous;
}