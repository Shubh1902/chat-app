import { CommentInterface } from 'src/modules/comments/types';

export const data = [];
export const PHOTOS_API = 'https://jsonplaceholder.typicode.com/photos/1';
export const SAMPLE_COMMENT_PROP: CommentInterface = {
  id: '1',
  imgSrc: 'https://via.placeholder.com/150/92c952',
  name: 'user name',
  comment: `Long regarded as a place no`,
  likes: 10,
  time: new Date(),
  replies: [],
};
export const SAMPLE_DATA: Array<CommentInterface> = [
  {
    id: '1',
    imgSrc: 'https://via.placeholder.com/150/92c952',
    name: 'user name',
    time: new Date(),
    likes: 10,
    comment: `Long regarded as a place no`,
    replies: [
      {
        id: '2',
        imgSrc: 'https://via.placeholder.com/150/92c952',
        name: 'user name',
        time: new Date(),
        likes: 10,
        comment: `Long regarded as a place no`,
        replies: [
            {
              id: '2',
              imgSrc: 'https://via.placeholder.com/150/92c952',
              name: 'user name',
              time: new Date(),
              likes: 10,
              comment: `Long regarded as a place no`,
              replies: [],
            },
            {
              id: '3',
              imgSrc: 'https://via.placeholder.com/150/92c952',
              name: 'user name',
              time: new Date(),
              likes: 10,
              replies: [],
              comment: `Long regarded as a place no`,
            },
          ],
      },
      {
        id: '3',
        imgSrc: 'https://via.placeholder.com/150/92c952',
        name: 'user name',
        time: new Date(),
        likes: 10,
        replies: [],
        comment: `Long regarded as a place no`,
      },
    ],
  },
  {
    id: '4',
    imgSrc: 'https://via.placeholder.com/150/92c952',
    name: 'user name',
    time: new Date(),
    likes: 10,
    comment: `Long regarded as a place no`,
    replies: [
      {
        id: '5',
        comment: `Long regarded as a place no`,
        imgSrc: 'https://via.placeholder.com/150/92c952',
        name: 'user name',
        time: new Date(),
        likes: 10,
        replies: [],
      },
    ],
  },
];
