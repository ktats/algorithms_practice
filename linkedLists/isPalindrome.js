function isPalindrome(head) {
    let stack = [];
    let runner = head;
    let slow = head;
    while (runner && runner.next) {
        stack.push(slow.data);
        slow = slow.next;
        runner = runner.next.next;
    }

    if (runner) {
        // list is even
        slow = slow.next;
    }

    while (slow) {
        if (slow.data !== stack.pop()) {
            return false;
        }
        slow = slow.next;
    }

    return true;
}