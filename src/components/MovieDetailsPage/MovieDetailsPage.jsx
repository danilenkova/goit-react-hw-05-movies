import PropTypes from "prop-types";
import { NavLink, Outlet } from "react-router-dom";
import {
  MovieCard,
  MovieInfo,
  Poster,
  MovieInfoDetails,
  MovieTitle,
  Title,
  Text,
  InfoList,
  InfoItem,
} from "./MovieDetailsPage.styled";
import s from "../../styles/styles.module.css";

const MovieDetailsPage = ({ movie, movieId, goToMain }) => (
  <MovieCard>
    <MovieInfo>
      <Poster src={movie.poster_path} alt={movie.original_title} />
      <MovieInfoDetails>
        <MovieTitle>
          {movie.original_title} ({movie.release_date})
        </MovieTitle>
        <Text>Vote: {movie.vote_average}</Text>
        <Title>Overwiev</Title>
        <Text>{movie.overview}</Text>
        <Title>Genres</Title>
        <Text>{movie.genres}</Text>
      </MovieInfoDetails>
    </MovieInfo>
    <MovieInfoDetails>
      <Title>Additional information</Title>
      <InfoList>
        <InfoItem>
          <NavLink
            to={`/movies/${movieId}/cast`}
            state={{ from: goToMain }}
            className={({ isActive }) =>
              isActive ? `${s.activeLink}` : `${s.link}`
            }
          >
            Cast
          </NavLink>
        </InfoItem>
        <InfoItem>
          <NavLink
            to={`/movies/${movieId}/reviews`}
            state={{ from: goToMain }}
            className={({ isActive }) =>
              isActive ? `${s.activeLink}` : `${s.link}`
            }
          >
            Reviews
          </NavLink>
        </InfoItem>
      </InfoList>
      <Outlet />
    </MovieInfoDetails>
  </MovieCard>
);

MovieDetailsPage.propTypes = {
  movie: PropTypes.object.isRequired,
  movieId: PropTypes.string.isRequired,
  goToMain: PropTypes.object.isRequired,
};

export default MovieDetailsPage;
