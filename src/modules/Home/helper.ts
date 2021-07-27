import { CommentInterface } from 'src/modules/Home/types';

export const findNodeByPath: any= (
  tree: CommentInterface[],
  path: string[]
) => {
  const id = path[0];
  path.splice(0, 1);
  const node = tree.find((elem) => elem.id === id);
  if (path.length && node && node.children) {
    return findNodeByPath(node.children, path);
  } else {
    return node;
  }
};
