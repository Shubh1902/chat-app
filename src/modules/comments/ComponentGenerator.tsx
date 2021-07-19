import Comment from 'src/components/comment';
import Input from 'src/components/input';
import { ChildrenInterface, InputInterface } from 'src/modules/comments/types';
export const getComment = (comment: ChildrenInterface) => {
  return <Comment {...comment} />;
};
export const getReply = (reply: InputInterface) => {
  return <Input {...reply} placeholder="Reply" reply={true}></Input>;
};
const ComponentGenerator = (props: { data: Array<ChildrenInterface> }) => {
  return <>{generateComponent(props.data)}</>;
};
const generateComponent = (data: Array<ChildrenInterface>) => {
  return data.map((comment) => {
    const CommentJSX = getComment(comment);
    return (
      <div key={comment.id}>
        {CommentJSX}
        <div className="child-comment">
          {comment.reply && getReply(comment.reply)}
          {comment.children.length > 0 && generateComponent(comment.children)}
        </div>
      </div>
    );
  });
};

export default ComponentGenerator;
