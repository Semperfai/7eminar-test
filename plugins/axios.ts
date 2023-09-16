import axios from 'axios';

export default defineNuxtPlugin((NuxtApp) => {
  if (NuxtApp) {
    axios.defaults.baseURL = 'https://7eminar.ua';
  }
  axios.defaults.withCredentials = true;

  return {
    provide: {
      axios: axios,
    },
  };
});
