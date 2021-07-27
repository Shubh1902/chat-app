import Comment from 'src/components/comment';
import ReplyInput from 'src/components/ReplyInput';
import { CommentInterface } from 'src/modules/Home/types';

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
      return (
        <div key={comment.id}>
          <Comment
            {...comment}
            treeId={`${parentId}/${comment.id}`}
            addReply={props.addReply}
            deleteComment={props.deleteComment}
            edit={props.edit}
          />
          <div className="child-comment">
            {comment.replyInput && (
              <ReplyInput
                {...comment.replyInput}
                saveReply={props.saveReply}
                treeId={`${parentId}/${comment.id}`}
              ></ReplyInput>
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
