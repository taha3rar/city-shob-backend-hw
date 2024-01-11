import { nodeModel } from './mongo/schemas.js';


/**
 * 
 * @param {node} node
 * @summary This function populates the children of a node recursively 
 */
async function populateChildren(node) {
  if (node.children && node.children.length > 0) {
    await nodeModel.populate(node, { path: 'children' });
    for (const child of node.children) {
      await populateChildren(child);
    }
  }
}

export { populateChildren };
