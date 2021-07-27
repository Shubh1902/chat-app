import React, { useState } from 'react';
import './styles.css';
interface Props {
  id: string;
  imgSrc: string;
  saveReply: any;
  treeId: string;
}
const ReplyInput = (props: Props) => {
  const [reply, setReply] = useState('');
  const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && reply) {
      props.saveReply(props.treeId, reply, props.id);
    }
    event.stopPropagation();
  };
  const onchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReply(event.target.value);
  };
  return (
    <div className="flex margin-top-20">
      <div>
        <img src={props.imgSrc} alt="" className="child-comment-height" />
      </div>
      <div className="margin-left-10 flex-grow-1">
        <input
          type="text"
          className="child-comment-height border-box full-width input"
          placeholder={'Enter a reply...'}
          maxLength={200}
          name="reply-input"
          onKeyUp={onKeyUp}
          onChange={onchange}
        />
      </div>
    </div>
  );
};
export default ReplyInput;
