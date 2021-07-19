import { ChildrenInterface } from 'src/modules/comments/types';
import { v4 as uuidv4 } from 'uuid';

export const data = [];
export const PHOTOS_API = 'https://jsonplaceholder.typicode.com/photos/1';
export const SAMPLE_COMMENT_PROP: ChildrenInterface = {
  id: uuidv4(),

  imgSrc: 'https://via.placeholder.com/150/92c952',
  name: 'user name',
  comment: `Long regarded as a place no`,
  likes: 10,
  time: new Date(),
  children: [],
};
export const SAMPLE_INPUT_PROPS = {
  placeholder: 'Join the discussion...',
  imgSrc: 'https://via.placeholder.com/150/92c952',
  reply: false,
};
export const SAMPLE_DATA: Array<ChildrenInterface> = [
  {
    id: uuidv4(),
    imgSrc: 'https://via.placeholder.com/150/92c952',
    name: 'user name',
    time: new Date(),
    likes: 10,
    comment: `Long regarded as a place no`,
    children: [
      {
        id: uuidv4(),
        imgSrc: 'https://via.placeholder.com/150/92c952',
        name: 'user name',
        time: new Date(),
        likes: 10,
        comment: `Long regarded as a place no`,
        children: [
          {
            id: uuidv4(),
            imgSrc: 'https://via.placeholder.com/150/92c952',
            name: 'user name',
            time: new Date(),
            likes: 10,
            comment: `Long regarded as a place no`,
            children: [],
          },
          {
            id: uuidv4(),
            imgSrc: 'https://via.placeholder.com/150/92c952',
            name: 'user name',
            time: new Date(),
            likes: 10,
            children: [],
            comment: `Long regarded as a place no`,
          },
        ],
      },
      {
        id: uuidv4(),
        imgSrc: 'https://via.placeholder.com/150/92c952',
        name: 'user name',
        time: new Date(),
        likes: 10,
        children: [],
        comment: `Long regarded as a place no`,
      },
    ],
  },
  {
    id: uuidv4(),
    imgSrc: 'https://via.placeholder.com/150/92c952',
    name: 'user name',
    time: new Date(),
    likes: 10,
    comment: `Long regarded as a place no`,
    children: [
      {
        id: uuidv4(),
        comment: `Long regarded as a place no`,
        imgSrc: 'https://via.placeholder.com/150/92c952',
        name: 'user name',
        time: new Date(),
        likes: 10,
        children: [],
      },
    ],
  },
  {
    id: uuidv4(),
    imgSrc: 'https://via.placeholder.com/150/92c952',
    name: 'user name',
    time: new Date(),
    likes: 10,
    comment: `Long regarded as a place no`,
    children: [
      {
        id: uuidv4(),
        imgSrc: 'https://via.placeholder.com/150/92c952',
        name: 'user name',
        time: new Date(),
        likes: 10,
        comment: `Long regarded as a place no`,
        children: [
          {
            id: uuidv4(),
            imgSrc: 'https://via.placeholder.com/150/92c952',
            name: 'user name',
            time: new Date(),
            likes: 10,
            comment: `Long regarded as a place no`,
            children: [],
          },
          {
            id: uuidv4(),
            imgSrc: 'https://via.placeholder.com/150/92c952',
            name: 'user name',
            time: new Date(),
            likes: 10,
            children: [],
            comment: `Long regarded as a place no`,
          },
        ],
      },
      {
        id: uuidv4(),
        imgSrc: 'https://via.placeholder.com/150/92c952',
        name: 'user name',
        time: new Date(),
        likes: 10,
        children: [],
        comment: `Long regarded as a place no`,
      },
    ],
  },
  {
    id: uuidv4(),
    imgSrc: 'https://via.placeholder.com/150/92c952',
    name: 'user name',
    time: new Date(),
    likes: 10,
    comment: `Long regarded as a place no`,
    children: [
      {
        id: uuidv4(),
        comment: `Long regarded as a place no`,
        imgSrc: 'https://via.placeholder.com/150/92c952',
        name: 'user name',
        time: new Date(),
        likes: 10,
        children: [],
      },
    ],
  },
];
