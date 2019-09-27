function bfsGetPath(graph, startNode, endNode) {
    let nodesToVisit = new Queue();
    nodesToVisit.enqueue(startNode);
    let howWeReachedNodes = {};
    howWeReachedNodes[startNode] = null;
    while (nodesToVisit.length) {
        let current = nodesToVisit.dequeue();
        // Check if current node is end node
        // Breadth first search, so enqueue all the neighbors
        // Make sure to record path of how you got to each node
        if (current === endNode) {
            return reconstructPath(howWeReachedNodes, startNode, current);
        }

        graph[currentNode].forEach(neighbour => {
            if (!howWeReachedNodes.hasOwnProperty(neighbour)) {
                howWeReachedNodes[neighbour] = current;
                nodesToVisit.enqueue(neighbour);
            }
        })
    }

}


function reconstructPath(howWeReachedNodes, startNode, endNode) {
    let pathway = [];
    let current = endNode;
    while (current) {
        pathway.push(current);
        current = howWeReachedNodes[current];
    }
    return pathway.reverse();
}