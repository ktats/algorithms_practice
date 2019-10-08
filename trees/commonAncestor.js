function commonAncestor(root, n1, n2) {
    let n1Path = getPath(root, n1);
    let n2Path = getPath(root, n2);
    let result;
    for (let i = 0; i < Math.min(n1Path.length, n2Path.length); i++) {
      if (n1Path[i] === n2Path[i]) {
          result = n1Path[i];
      }
    }
    return result;

}

function getPath(root, endNode) {
    let path = [root];
    let ancestorPath = null;
    (function recurse(node) {
      if (node === endNode) {
          ancestorPath = path.slice();
          return;
      }
      for (let i = 0; i < node.children.length; i++) {
          path.push(node.children[i]);
          recurse(node.children[i]);
          path.pop();
      }
    })(root);

    return ancestorPath;
}


function getPath2(root, endNode) {
    let queue = new Queue();
    queue.enqueue(root);
    let pathToEachNode = {};
    pathToEachNode[root] = null;
    while (queue.length) {
      let currentNode = queue.dequeue();
      if (currentNode === endNode) {
          return reconstructPath(pathToEachNode, endNode);
      }
      for (let i = 0; i < currentNode.children.length; i++) {
        if (!pathToEachNode.hasOwnProperty(currentNode.children[i])) {
            pathToEachNode[currentNode.children[i]] = currentNode;
            queue.enqueue(currentNode.children[i])
        }
      }
    } 
}