import { match } from 'assert';
import Elk from 'elkjs';
import { start } from 'repl';

// elk settings
const elk: any = new Elk({
  defaultLayoutOptions: {
    'elk.algorithm': 'layered',
    'elk.direction': 'RIGHT',
    'elk.spacing.nodeNode': '50',
    'elk.layered.spacing.nodeNodeBetweenLayers': '110',
    'elk.layered.noOverlap': 'true',
    'elk.padding': '[top=50, bottom=50, left=50, right=50]',
    'elk.edgeRouting': 'SPLINES',
    'elk.layered.nodePlacement.strategy': 'SIMPLE',
    // 'elk.edgeRouting.splines.mode': 'CONSERVATIVE',
    // 'elk.crossingMinimization.strategy': 'LAYER_SWEEP',
    // 'elk.layered.layering.strategy': 'NETWORK_SIMPLEX'
  },
});

// grab information for nodes and edges needed for elk
export async function getElkData(nodes: any, edges: any, startPositions: any) {
  const elkNodes: any[] = [];
  const elkEdges: any[] = [];

  // add node data to elkNodes
  nodes.forEach((node: any) => {
    elkNodes.push({
      id: node.id,
      width: node.style.width,
      height: node.style.height,
    });
  });

  // add edges as only groups, not individual column nodes
  edges.forEach((edge: any) => {
    elkEdges.push({
      id: edge.id,
      source: `${edge.source.split('.')[1]}.group`,
      target: `${edge.target.split('.')[1]}.group`,
    });
  });

  // run elk
  const elkCalculate = await elk.layout({
    id: 'root',
    children: elkNodes,
    edges: elkEdges,
  });

  // update nodes with elk positions, switching back from group edges to individual column edges
  const positions = nodes.map((node: any) => {
    const elkNode = elkCalculate.children.find(
      (elkNode: any) => elkNode.id === node.id
    );
    if (node.id.includes('group')) {
      let x = elkNode.x;
      let y = elkNode.y;

      console.log('node', node);

      // find starting position of current node
      let matchingNode;
      if (Array.isArray(startPositions)) {
        for (let startNode of startPositions) {
          // console.log('startNode', startNode);
          if (JSON.stringify(startNode.id) === JSON.stringify(node.id)) {
            console.log('here');
            matchingNode = startNode;
          }
        }
      }

      if (matchingNode) {
        console.log('xy', x, y);
        x = matchingNode.position.x;
        y = matchingNode.position.y;
        console.log('new xy', x, y);
      }

      return {
        ...node,
        position: {
          x: x,
          y: y,
        },
      };
    } else return node;
  });
  console.log('positions', positions);
  return positions;
}
