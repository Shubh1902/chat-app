export interface ChildrenInterface {
  id: string;
  imgSrc: string;
  name: string;
  time: Date;
  likes: number;
  children: Array<ChildrenInterface>;
  comment: string;
  reply?: InputInterface;
}
export interface InputInterface {
  id: string;
  imgSrc: string;
}
