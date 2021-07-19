import Comment from 'src/components/comment';
import Input from 'src/components/input';
import { ChildrenInterface, InputInterface } from 'src/modules/comments/types';
export const getComment = (
  comment: ChildrenInterface,
  treeId: string,
  addReply: any
) => {
  return <Comment {...comment} treeId={treeId} addReply={addReply}/>;
};
export const getReply = (reply: InputInterface) => {
  return <Input {...reply} placeholder="Write a reply..." reply={true}></Input>;
};
const ComponentGenerator = (props: {
  data: Array<ChildrenInterface>;
  addReply: any;
}) => {
  return <>{generateComponent(props.data, 'root', props.addReply)}</>;
};
const generateComponent = (
  data: Array<ChildrenInterface>,
  parentId: string,
  addReply: any
) => {
  return data.map((comment) => {
    const CommentJSX = getComment(
      comment,
      `${parentId}/${comment.id}`,
      addReply
    );
    return (
      <div key={comment.id}>
        {CommentJSX}
        <div className="child-comment">
          {comment.reply && getReply(comment.reply)}
          {comment.children.length > 0 &&
            generateComponent(comment.children, `${parentId}/${comment.id}`, addReply)}
        </div>
      </div>
    );
  });
};

export default ComponentGenerator;
