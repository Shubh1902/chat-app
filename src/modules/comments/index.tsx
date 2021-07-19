import React, { Suspense } from 'react';
import Input from 'src/components/input';
import { SAMPLE_DATA } from 'src/modules/comments/constants';
import './styles.css';
const ComponentGenerator = React.lazy(
  () => import('src/modules/comments/ComponentGenerator')
);
export const Comments = () => {
  const data = SAMPLE_DATA.concat(SAMPLE_DATA).concat(SAMPLE_DATA);
  return (
    <div className="container">
      <Input />
      {/* <div>
        <Comment {...SAMPLE_COMMENT_PROP} />
        <div className="child-comment">
          <Comment {...SAMPLE_COMMENT_PROP} />
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
