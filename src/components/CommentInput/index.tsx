import React, { useState } from 'react';
import './styles.css';
interface Props {
  placeholder: string;
  imgSrc: string;
  addCallback: any;
}
const CommentInput = (props: Props) => {
  const [comment, setComment] = useState('');
  const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      props.addCallback(comment);
      setComment('');
    }
    event.stopPropagation();
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };
  return (
    <div className="flex margin-top-20">
      <div id="image-div">
        <img src={props.imgSrc} alt="" className="comment-height" />
      </div>
      <div className="margin-left-10 flex-grow-1">
        <input
          type="text"
          className="comment-height border-box full-width input"
          placeholder={props.placeholder}
          maxLength={200}
          name="comment-input"
          onKeyUp={onKeyUp}
          onChange={onChange}
          value={comment}
        />
      </div>
    </div>
  );
};
export default CommentInput;
