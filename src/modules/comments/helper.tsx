import { Comment } from 'src/components/comment';
import { CommentInterface } from 'src/modules/comments/types';

export const generateComponent = (data: Array<CommentInterface>) => {
  return data.map((comment) => {
    const CommentJSX = getComment(comment);
    if (comment.replies.length) {
      const Children = generateComponent(comment.replies);
      return (
        <div>
          {CommentJSX}
          <div className="child-comment">{Children}</div>
        </div>
      );
    } else {
      return <div>{CommentJSX}</div>;
    }
  });
};

export const getComment = (comment: CommentInterface) => {
  return <Comment {...comment} />;
};
