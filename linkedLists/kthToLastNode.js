// cracking 211

function kthToLast(head, k) {
    let p1 = head;
    let p2 = head;
    for (let i = 0; i < k; i++) {
        p1 = p1.next;
    }

    while (p2 !== null) {
        p1 = p1.next;
        p2 = p2.next;
    }
    return p2;
}