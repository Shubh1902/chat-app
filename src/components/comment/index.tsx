import React from 'react';
import './styles.css';
interface Props {
  id: string;
  imgSrc: string;
  name: string;
  comment: string;
  likes: number;
}
const Comment = (props: Props) => {
  return (
    <div className="flex margin-top-20">
      <div>
        <img src={props.imgSrc} alt="" className="comment-height" />
      </div>
      <div className="flex-column margin-left-10">
        <div className="flex">
          <div className="user-name">{props.name}</div>
          <div className="flex-column margin-left-20 time">7 Hours ago</div>
        </div>
        <div className="flex comment">
          <div className="text-left ">{props.comment}</div>
        </div>
        <div className="flex" id="comment-actions">
          <div className="likes">{props.likes}</div>
          <div className="arrow-up-div">
            <i className="arrow up"></i>
          </div>
          <div>|</div>
          <div className="arrow-down-div ">
            <i className="arrow down"></i>
          </div>
          <div>Reply</div>
          <div>Share</div>
        </div>
      </div>
    </div>
  );
};
export default Comment;
