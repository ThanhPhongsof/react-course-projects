export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "0d3b2005b0dcb775cf17c8a021f6d832";
export const apiUrl = "https://api.themoviedb.org/3/movie";
export const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
export const tmdbEndpointSearch = "https://api.themoviedb.org/3/search/movie";
export const tmdbAPI = {
  getMovieList: (type) => `${tmdbEndpoint}/${type}?api_key=${apiKey}`,
  getMovieListByKeyword: (type) => `${tmdbEndpointSearch}?api_key=${apiKey}`,
};
