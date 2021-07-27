import React, { Suspense, useEffect, useState } from 'react';
import CommentInput from 'src/components/CommentInput';
import { DEFAULT_COMMENT_INPUT } from 'src/modules/Home/constants';
import { useData } from 'src/modules/Home/useData';
import { generateRandomImage, getCachedData } from 'src/modules/Home/utility';
import './styles.css';

const ComponentGenerator = React.lazy(
  () => import('src/modules/Home/ComponentGenerator')
);

export const Home = () => {
  const [img, setImg] = useState('');
  useEffect(() => {
    generateRandomImage().then((data) => {
      setImg(data.data.thumbnailUrl);
    });
  }, []);
  const {
    commentTree,
    addReplyInputField,
    addComment,
    saveReply,
    deleteComment,
    edit
  } = useData(getCachedData());
  return (
    <div className="container">
      <CommentInput
        {...DEFAULT_COMMENT_INPUT}
        imgSrc={img}
        addCallback={addComment}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <ComponentGenerator
          data={commentTree}
          addReply={addReplyInputField}
          saveReply={saveReply}
          deleteComment={deleteComment}
          edit={edit}
        />
      </Suspense>
    </div>
  );
};
