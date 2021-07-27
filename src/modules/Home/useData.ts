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

  const addReplyInputField = (treeId: string) => {
    let localTree = _.cloneDeep(data);
    const path = treeId.split('/');
    path.splice(0, 1);
    let node = findNodeByPath(localTree, path);
    node.reply = {
      id: uuidv4(),
      imgSrc: 'https://via.placeholder.com/150/92c952',
      saveReply,
    };
    setCommentTree(localTree);
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

  const saveReply = (treeId: string, comment: string) => {
    let localTree = _.cloneDeep(data);
    const path = treeId.split('/');
    path.splice(0, 1);
    const node = findNodeByPath(localTree, path);

    node.children.unshift({
      id: uuidv4(),
      children: [],
      comment,
      imgSrc: 'https://via.placeholder.com/150/92c952',
      likes: 0,
      dislikes: 0,
      name: 'Shubhanshu Bahuguna',
      time: new Date(),
    });
    setCommentTree(localTree);
  };
  return { commentTree, addReplyInputField, addComment };
};
