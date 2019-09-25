// Write a function, depth first, to test whether a tree is "superbalanced"
// superbalanced is when no two leaves have more than 2 depth apart 

function superbalanced(root) {
    let nodes = [];
    nodes.push([root, 0]);
    let depths = [];
    while (nodes) {
        const nodePair = nodes.pop();
        const node = nodePair[0];
        const depth = nodePair[1];

        // Do work to check if not superbalanced
        
        //check if leaf
        if (!node.right && !node.left) {
            // not superbalanced if there are more than 2 depths, or if 2 leaf depths are more than one apart

            if (depths.indexOf(depth) < 0) {
                depths.push(depth);
            }

            if ((depths.length > 2) || (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)) {
                return false;
            }
        }




        // Depth first search
        if (node.left) {
            nodes.push([node.left, depth + 1])
        }
        if (node.right) {
            nodes.push([node.right, depth + 1]);
        }
    }

    return true;


}