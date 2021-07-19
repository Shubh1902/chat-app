import React, { Suspense } from 'react';
import Input from 'src/components/input';
import {
  SAMPLE_DATA,
  SAMPLE_INPUT_PROPS,
} from 'src/modules/comments/constants';
import './styles.css';
const ComponentGenerator = React.lazy(
  () => import('src/modules/comments/ComponentGenerator')
);
export const Comments = () => {
  const data = SAMPLE_DATA;
  return (
    <div className="container">
      <Input {...SAMPLE_INPUT_PROPS} />
      {/* <div>
        <Comment {...SAMPLE_COMMENT_PROP} />
        <div className="child-comment">
          <Comment {...SAMPLE_COMMENT_PROP} />
          <Input {...SAMPLE_INPUT_PROPS} reply={true} placeholder="Reply"/>
        </div>
      </div>
      <div>
        <Comment {...SAMPLE_COMMENT_PROP} />
      </div> */}
      <Suspense fallback={<div>Loading...</div>}>
        <ComponentGenerator data={data} />
      </Suspense>
    </div>
  );
};
