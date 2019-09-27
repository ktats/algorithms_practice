function colorGraph(graph, colors) {
    graph.forEach(node => {
      let illegalColors = new Set();
      node.neighbors.forEach(neighbor => {
          if (neighbor.color !== null) {
              illegalColors.add(neighbor.color);
          }
      });
      for (let i = 0; i < colors.length; i++) {
          if (!illegalColors.has(colors[i])) {
              node.color = colors[i];
              break;
          }
      }
    });
}