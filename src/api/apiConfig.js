const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: 'f41cbefce158e1d105cd4f1a409ba183',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
