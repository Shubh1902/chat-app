export interface CommentInterface {
  id: string;
  imgSrc: string;
  name: string;
  time: Date;
  likes: number;
  replies: CommentInterface[];
  comment: string;
}
