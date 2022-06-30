import {apiMethods} from './TypeKeys';

export default {
  data: {
    apiKey: 'k_f64p5sdl',
    apiTimeout: 6000,
  },

  api: {
    searchMovie: {
      url: 'https://imdb-api.com/en/API/SearchMovie/k_f64p5sdl/',
      method: apiMethods.get,
    },
  },
};
