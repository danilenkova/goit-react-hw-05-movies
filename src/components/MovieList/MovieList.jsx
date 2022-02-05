import PropTypes from "prop-types";
import {
  MovieGallery,
  MovieGalleryItem,
  MovieGalleryPoster,
  MovieGalleryTitle,
  Title,
  StyledLink,
} from "./MovieList.styled";

export default function MovieList({ movies, location }) {
  return (
    <MovieGallery>
      {movies.map((movie) => (
        <MovieGalleryItem key={movie.id} id={movie.id}>
          <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
            <MovieGalleryPoster
              src={movie.poster_path}
              alt={movie.original_title}
            />
            <MovieGalleryTitle>
              <Title>{movie.original_title}</Title>
            </MovieGalleryTitle>
          </StyledLink>
        </MovieGalleryItem>
      ))}
    </MovieGallery>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  location: PropTypes.object,
};
