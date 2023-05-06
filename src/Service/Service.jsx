// const API_KEY = 'api_key=d9e5c099ca8ba6f8195ed4b40ff8ecad';
// const xxx = `https://api.themoviedb.org/3/search/movie?${API_KEY}&query=Ren`;

class Service {
  _API_KEY = 'api_key=d9e5c099ca8ba6f8195ed4b40ff8ecad';
  _base_URL = 'https://api.themoviedb.org/3/movie/';

  getPopularMovies = async (pageNumber = 1) => {
    const response = await fetch(`${this._base_URL}popular?${this._API_KEY}&page=${pageNumber}`);
    if (response.ok) {
      return await response.json();
    }
  };

  getGenresMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?${this._API_KEY}&language=en-US`
    );
    if (response.ok) {
      return await response.json();
    }
  };
}

export { Service };
