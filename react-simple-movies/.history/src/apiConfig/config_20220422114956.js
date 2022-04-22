export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "0d3b2005b0dcb775cf17c8a021f6d832";
export const tmdbEndpoint = "https://api.themoviedb.org/3/moviez";
export const tmdbEndpointSearch = "https://api.themoviedb.org/3/search/movie";
export const tmdbAPI = {
  getMovieList: (type, page = 1) =>
    `${tmdbEndpoint}/${type}?api_key=${apiKey}&page=${page}`,
  getMovie: (movieId) => `${tmdbEndpoint}/${movieId}?api_key=${apiKey}`,
  getMovieMeta: (movieId, meta) =>
    `${tmdbEndpoint}/${movieId}/${meta}?api_key=${apiKey}`,
  getMovieListByKeyword: (query = "", page = 1) =>
    `${tmdbEndpointSearch}?api_key=${apiKey}&query=${query}&page=${page}`,
};
export const tmdbUrl = (type) => `https://image.tmdb.org/t/p/${type}/`;
