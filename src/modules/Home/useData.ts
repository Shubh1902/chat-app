import _ from 'lodash';
import { useEffect, useState } from 'react';
import { findNodeByPath } from 'src/modules/Home/helper';
import { CommentInterface } from 'src/modules/Home/types';
import {
  generateRandomImage,
  generateRandomName,
} from 'src/modules/Home/utility';
import { v4 as uuidv4 } from 'uuid';

export const useData = (data: CommentInterface[]) => {
  const [commentTree, setCommentTree] = useState(data);

  useEffect(() => {
    const commentTreeString = JSON.stringify(commentTree);
    localStorage.setItem('commentTree', commentTreeString);
  }, [commentTree]);

  const saveReply = (treeId: string, comment: string, id: string) => {
    let localTree = _.cloneDeep(data);
    const path = treeId.split('/');
    path.splice(0, 1);
    const node = findNodeByPath(localTree, path);
    generateRandomImage().then((data) => {
      const imgUrl = data.data.thumbnailUrl;
      generateRandomName().then((data) => {
        const name = data.data.name;
        node.children.unshift({
          id: uuidv4(),
          children: [],
          comment,
          imgSrc: imgUrl,
          likes: 0,
          dislikes: 0,
          name,
          time: new Date(),
        });
        node.replyInput = null;
        setCommentTree(localTree);
      });
    });
  };
  const addReplyInputField = (treeId: string) => {
    let localTree = _.cloneDeep(commentTree);
    const path = treeId.split('/');
    path.splice(0, 1);
    let node = findNodeByPath(localTree, path);
    generateRandomImage().then((data) => {
      const imgUrl = data.data.thumbnailUrl;
      node.replyInput = {
        id: uuidv4(),
        imgSrc: imgUrl,
      };
      setCommentTree(localTree);
    });
  };

  const addComment = (comment: string) => {
    generateRandomImage().then((data) => {
      const imgUrl = data.data.thumbnailUrl;
      generateRandomName().then((data) => {
        const name = data.data.name;
        setCommentTree((prev) => {
          const arr = [...prev];
          arr.unshift({
            id: uuidv4(),
            children: [],
            comment,
            imgSrc: imgUrl,
            likes: 0,
            dislikes: 0,
            name,
            time: new Date(),
          });
          return arr;
        });
      });
    });
  };

  const deleteComment = (treeId: string, id: string) => {
    let localTree = _.cloneDeep(commentTree);
    const path = treeId.split('/');
    path.splice(0, 1);
    path.splice(path.length - 1, 1);
    if (path.length) {
      let node = findNodeByPath(localTree, path);
      let index = node.children.findIndex((elem) => elem.id === id);
      node.children.splice(index, 1);
    } else {
      let index = localTree.findIndex((elem) => elem.id === id);
      localTree.splice(index, 1);
    }
    setCommentTree(localTree);
  };

  const edit = (treeId: string, id: string) => {
    let localTree = _.cloneDeep(commentTree);
    const path = treeId.split('/');
    path.splice(0, 1);
    let node = findNodeByPath(localTree, path);
    node.replyInput = {
      id,
      imgSrc: node.imgSrc,
      text: node.comment,
    };
    deleteComment(treeId, id);
    setCommentTree(localTree);
  };
  return {
    commentTree,
    addReplyInputField,
    addComment,
    saveReply,
    deleteComment,
    edit,
  };
};
