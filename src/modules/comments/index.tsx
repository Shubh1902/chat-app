import React from 'react';
import { Comment } from 'src/components/comment';
import { Input } from 'src/components/input';
import {
  SAMPLE_COMMENT_PROP,
  SAMPLE_DATA,
} from 'src/modules/comments/constants';
import { generateComponent } from 'src/modules/comments/helper';
import './styles.css';
export const Comments = () => {
  return (
    <div className="container">
      <div>
        <Input />
      </div>
      {/* <div>
        <Comment {...SAMPLE_COMMENT_PROP} />
        <div className="child-comment">
          <Comment {...SAMPLE_COMMENT_PROP} />
        </div>
      </div>
      <div>
        <Comment {...SAMPLE_COMMENT_PROP} />
      </div> */}
      {generateComponent(SAMPLE_DATA)}
    </div>
  );
};
