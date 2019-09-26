function valid(root) {
    const nodeAndBoundStack = [];
    nodeAndBoundStack.push({node: root, lowerBound: -100, upperBound: 100})
    while (nodeAndBoundStack.length) {
        let { node, lowerBound, upperBound } = nodeAndBoundStack.pop();
        if (node.value <= lowerBound || node.value >= upperBound) {
            return false;
        }
        if (node.left) {
            nodeAndBoundStack.push({node: node.left, lowerBound, upperBound: node.value});
        }
        if (node.right) {
            nodeAndBoundStack.push({node: node.right, lowerBound: node.value, upperBound})
        }
    }
    return true;
}