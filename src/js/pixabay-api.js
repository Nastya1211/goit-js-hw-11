import axios from 'axios';

const API_KEY = '56487481-0495141e7e76f8d02370d655c';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const searchParams = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios.get(BASE_URL, { params: searchParams }).then(response => {
    // ТЗ: Функція повинна повертати значення властивості data
    return response.data;
  });
}
