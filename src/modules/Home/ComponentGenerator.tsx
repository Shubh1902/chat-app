import Comment from 'src/components/comment';
import CommentInput from 'src/components/CommentInput';
import { CommentInterface, ReplyInputInterface } from 'src/modules/Home/types';
import ReplyInput from 'src/components/ReplyInput';
export const getComment = (
  comment: CommentInterface,
  treeId: string,
  addReply: any,
  deleteComment: any,
  edit: any
) => {
  return (
    <Comment
      {...comment}
      treeId={treeId}
      addReply={addReply}
      deleteComment={deleteComment}
      edit={edit}
    />
  );
};
export const getReplyInputComponent = (
  reply: ReplyInputInterface,
  saveReply: any,
  treeId: string
) => {
  return (
    <ReplyInput {...reply} saveReply={saveReply} treeId={treeId}></ReplyInput>
  );
};

const ComponentGenerator = (props: {
  data: Array<CommentInterface>;
  addReply: any;
  saveReply: any;
  deleteComment: any;
  edit: any;
}) => {
  const generateComponent = (
    data: Array<CommentInterface>,
    parentId: string
  ) => {
    return data.map((comment) => {
      const CommentJSX = getComment(
        comment,
        `${parentId}/${comment.id}`,
        props.addReply,
        props.deleteComment,
        props.edit
      );
      return (
        <div key={comment.id}>
          {CommentJSX}
          <div className="child-comment">
            {comment.replyInput &&
              getReplyInputComponent(
                comment.replyInput,
                props.saveReply,
                `${parentId}/${comment.id}`
              )}
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
