export interface CommentInterface {
  id: string;
  imgSrc: string;
  name: string;
  time: Date;
  likes: number;
  dislikes: number;
  children: Array<CommentInterface>;
  comment: string;
  replyInput?: ReplyInputInterface;
}
export interface ReplyInputInterface {
  id: string;
  imgSrc: string;
  saveReply: any;
  text?: string;
}
