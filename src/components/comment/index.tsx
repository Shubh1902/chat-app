import moment from 'moment';
import React from 'react';
import './styles.css';
interface Props {
  id: string;
  imgSrc: string;
  name: string;
  comment: string;
  likes: number;
  dislikes: number;
  treeId: string;
  addReply: any;
  time: Date;
  deleteComment: any;
  edit: any;
}
const Comment = (props: Props) => {
  return (
    <div className="flex margin-top-20">
      <div id="image-div">
        <img src={props.imgSrc} alt="" className="comment-height" />
      </div>
      <div className="flex-column margin-left-10">
        <div className="flex">
          <div className="user-name">{props.name}</div>
          <div className="flex-column margin-left-20 time">
            {moment(props.time).fromNow()}
          </div>
        </div>
        <div className="flex comment">
          <div className="text-left ">{props.comment}</div>
        </div>
        <div className="flex" id="comment-actions">
          {props.likes > 0 && <div>{props.likes}</div>}
          <div>Like</div>
          <div>|</div>
          {props.dislikes > 0 && <div>{props.dislikes}</div>}
          <div>Dislike</div>
          <div
            onClick={() => {
              props.edit(props.treeId, props.id);
            }}
          >
            Edit
          </div>
          <div
            onClick={() => {
              props.addReply(props.treeId);
            }}
          >
            Reply
          </div>
          <div
            onClick={() => {
              props.deleteComment(props.treeId, props.id);
            }}
          >
            Delete
          </div>
        </div>
      </div>
    </div>
  );
};
export default Comment;
