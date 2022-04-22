export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "0d3b2005b0dcb775cf17c8a021f6d832";
export const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
export const tmdbEndpointSearch = "https://api.themoviedb.org/3/search/movie";
export const tmdbAPI = {
  getMovieList: (type) => `${tmdbEndpoint}/${type}?api_key=${apiKey}`,
  getMovie: (movieId) => `${tmdbEndpoint}/${movieId}?api_key=${apiKey}`,
  getMovieCreditList: (movieId) =>
    `${tmdbEndpoint}/${movieId}/credits?api_key=${apiKey}`,
  getMovieVideoList: (movieId) =>
    `${tmdbEndpoint}/${movieId}/videos?api_key=${apiKey}`,
  getMovieSimilarList: (movieId) =>
    `${tmdbEndpoint}/${movieId}/similar?api_key=${apiKey}`,
  getMovieListByKeyword: () => `${tmdbEndpointSearch}?api_key=${apiKey}`,
};
export const tmdbUrl = (type) => `https://image.tmdb.org/t/p/${type}/`;
