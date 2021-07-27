import axios from 'axios';
export async function generateRandomImage() {
  const id = Math.floor(Math.random() * 1000) + 1;
  const data = await axios.get(
    `https://jsonplaceholder.typicode.com/photos/${id}`
  );
  return data;
}

export async function generateRandomName() {
  const id = Math.floor(Math.random() * 10) + 1;
  const data = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return data;
}

export const getCachedData = () => {
  const cachedData = localStorage.getItem('commentTree');
  if (cachedData) {
    return JSON.parse(cachedData);
  } else {
    return [];
  }
};
