import Comment from 'src/components/comment';
import CommentInput from 'src/components/CommentInput';
import { CommentInterface, ReplyInputInterface } from 'src/modules/Home/types';
import ReplyInput from 'src/components/ReplyInput';
export const getComment = (
  comment: CommentInterface,
  treeId: string,
  addReply: any
) => {
  return <Comment {...comment} treeId={treeId} addReply={addReply} />;
};
export const getReplyInputComponent = (reply: ReplyInputInterface) => {
  return <ReplyInput {...reply}></ReplyInput>;
};
const ComponentGenerator = (props: {
  data: Array<CommentInterface>;
  addReply: any;
}) => {
  const generateComponent = (
    data: Array<CommentInterface>,
    parentId: string
  ) => {
    return data.map((comment) => {
      const CommentJSX = getComment(comment, `${parentId}/${comment.id}`, props.addReply);
      return (
        <div key={comment.id}>
          {CommentJSX}
          <div className="child-comment">
            {comment.replyInput && getReplyInputComponent(comment.replyInput)}
            {comment.children.length > 0 &&
              generateComponent(comment.children, `${parentId}/${comment.id}`)}
          </div>
        </div>
      );
    });
  };

  return <>{generateComponent(props.data, 'root')}</>;
};

export default ComponentGenerator;
