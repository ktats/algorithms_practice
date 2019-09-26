function secondLargest(root) {
  function findLargest(root) {
      let node = root;
      while (node) {
          if (node.right) {
              node = node.right;
          } else {
              return node;
          }
      }
  }

  // If we have a right subtree that has no children, you are on the second largest
  // If you have no right subtree but do have a left subtree, then the second largest is the largest of the left subtree
  // Otherwise, keep stepping down
  let node = root;
  while (node) {
      if ((node.right) && (node.right|| node.left)) {
          return node;
      } else if ((!node.right) && (node.left)) {
          return findLargest(node.left)
      } else {
          node = node.right
      }
  }
}