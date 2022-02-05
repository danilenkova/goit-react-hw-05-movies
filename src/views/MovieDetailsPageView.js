import { useState, useEffect } from "react";
import { NavLink, useParams, useLocation } from "react-router-dom";
import { ImArrowLeft2 } from "react-icons/im";
import { getMoviesDetails, getCorrectDetails } from "../service/apiService";
import MovieDetailsPage from "../components/MovieDetailsPage";
import Loader from "../components/Loader/Loader";
import { NOT_ALERTS, myAlert } from "../service/alerts";
import s from "../styles/styles.module.css";

export default function MovieDetailsPageView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loader, setLoader] = useState(false);
  const location = useLocation();

  const goToMain = location?.state?.from ?? "/";

  useEffect(() => {
    const getDetails = async () => {
      setLoader(true);
      try {
        const movieInfo = await getMoviesDetails(movieId);
        const correctInfo = getCorrectDetails(movieInfo);
        setMovie(correctInfo);
      } catch (error) {
        myAlert(NOT_ALERTS.FETCH_ERROR);
      } finally {
        setLoader(false);
      }
    };
    getDetails();
  }, [movieId]);

  return (
    <>
      <NavLink to={goToMain} className={s.goBackLink}>
        <ImArrowLeft2 />
        Go Back
      </NavLink>
      {movie && (
        <MovieDetailsPage movie={movie} movieId={movieId} goToMain={goToMain} />
      )}
      {loader && <Loader />}
    </>
  );
}
