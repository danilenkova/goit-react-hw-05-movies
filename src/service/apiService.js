import defaultPhoto from "../images/no-poster.jpg";

const api_key = "8605d5fec0d14042c50963e3c0a43262";
const baseURL = "https://api.themoviedb.org/3";

export const apiService = async (url) => {
  const data = await fetch(`${baseURL}/${url}`);
  return data.json();
};

export function getTrends(page) {
  return apiService(`trending/movie/day?api_key=${api_key}&page=${page}`);
}

export function searchMovies(query, page) {
  return apiService(
    `search/movie?api_key=${api_key}&language=en-US&query=${query}&page=${page}&include_adult=false`
  );
}

export function getMoviesDetails(movie_id) {
  return apiService(`movie/${movie_id}?api_key=${api_key}&language=en-US`);
}
export async function getCast(movie_id) {
  const { cast } =
    await apiService(`movie/${movie_id}/credits?api_key=${api_key}&language=en-US
`);
  return cast;
}

export async function getReviews(movie_id) {
  const { results } = await apiService(
    `movie/${movie_id}/reviews?api_key=${api_key}&language=en-US&page=1`
  );
  return results;
}

export const getCorrectPoster = (data) => [
  ...data.map((item) => ({
    ...item,
    poster_path: item.poster_path
      ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
      : defaultPhoto,
  })),
];

export const getCorrectDetails = (data) => ({
  ...data,
  genres: data.genres.map((genre) => genre.name).join(", "),
  release_date: new Date(data.release_date).getFullYear(),
  poster_path: data.poster_path
    ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
    : defaultPhoto,
});

export const getCorrectCastPhoto = (data) => [
  ...data.map((item) => ({
    ...item,
    profile_path: item.profile_path
      ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
      : defaultPhoto,
  })),
];
