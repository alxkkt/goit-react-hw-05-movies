import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'f65bce350427b2684a98ce5b213c02c8',
  },
});

export const getTrendingMovies = async () => {
  const { data } = await instance.get('/trending/movie/day');

  return data.results;
};

export const getMovieById = async id => {
  const data = await instance.get(`/movie/${id}`);

  return data;
};
