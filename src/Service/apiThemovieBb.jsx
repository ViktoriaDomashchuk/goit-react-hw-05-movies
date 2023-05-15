import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const params = {
  key: '76cbb606f190fc237086ec33f1fd98a3',
  language: 'language=en-US',
  other: 'page=1&include_adult=false',
};

//Home
export const getTrendingMovies = async () => {
  const resp = await axios.get(`trending/all/day?api_key=${params.key}`);
  return resp.data;
};

//Movies details
export const getDetails = async id => {
  const details = await axios.get(
    `movie/${id}?api_key=${params.key}&${params.language}`
  );
  return details.data;
};

//Cast
export const getCast = async id => {
  const casts = await axios.get(
    `movie/${id}/credits?api_key=${params.key}&${params.language}`
  );
  return casts.data.cast;
};

//Reviews
export const getReviews = async credit_id => {
  const reviews = await axios.get(
    `movie/${credit_id}/reviews?api_key=${params.key}&${params.language}&page=1`
  );
  return reviews.data.results;
};

//Search
export const getSearchMovie = async query => {
  const response = await axios.get(
    `search/movie?api_key=${params.key}&${params.language}&query=${query}&${params.other}`
  );
  return response.data.results;
};