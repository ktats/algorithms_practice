// CITCI 211
// Copy data from next node into current node, delete current node

function deleteNode(listNode) {
    if (!listNode || !listNode.next) {
        return false;
    }

    listNode.value = listNode.next.value;
    listNode.next = listNode.next.next;
}