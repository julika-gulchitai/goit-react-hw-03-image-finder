import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const searchImages = async () => {
  const params = new URLSearchParams({
    key: '40712240-584c6352de5cb384d1e409b2f',
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    page: 1,
  });
  const response = await axios.get(`?${params}`);
  return response.data;
};

export const searchImagesbyQuery = async (query, page) => {
  const params = new URLSearchParams({
    key: '40712240-584c6352de5cb384d1e409b2f',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    page: page,
  });
  const response = await axios.get(`?${params}`);
  return response.data;
};

// export const searchImage = async configParams => {
//   const { data } = await axios.get(`/?`, {
//     params: {
//       key: '40712240-584c6352de5cb384d1e409b2f',
//       q: '',
//       image_type: 'photo',
//       orientation: 'horizontal',
//       per_page: 12,
//       ...configParams,
//       //   ...params,
//     },
//   });
//   return data;
// };
