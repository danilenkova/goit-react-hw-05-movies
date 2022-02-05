import { useState, useEffect, useReducer } from "react";
import { useLocation } from "react-router-dom";
import MovieList from "../components/MovieList";
import { getTrends, getCorrectPoster } from "../service/apiService";
import Loader from "../components/Loader/Loader";
import { NOT_ALERTS, myAlert } from "../service/alerts";
import { LoadMoreButton } from "../components/Buttons/Buttons";

const startPage = 1;

const moviesReducer = (state, action) => {
  switch (action.type) {
    case "get":
      return action.payload;
    case "add":
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default function HomeView() {
  const [movies, dispatch] = useReducer(moviesReducer, []);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(null);
  const [itemToScroll, setItemToScroll] = useState(null);
  const [loader, setLoader] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const getMoviesList = async () => {
      setLoader(true);
      try {
        const data = await getTrends(page);
        if (!data.results.length) {
          myAlert(NOT_ALERTS.NOT_FOUND);
          dispatch({ type: "get", payload: [] });
        }
        setTotal(data.total_results);
        const movieList = getCorrectPoster(data.results);
        const type = page === startPage ? "get" : "add";
        dispatch({ type: type, payload: movieList });
        if (page !== startPage) {
          setItemToScroll(movieList[0].id);
        }
      } catch (error) {
        myAlert(NOT_ALERTS.FETCH_ERROR);
      } finally {
        setLoader(false);
      }
    };
    getMoviesList();
  }, [page]);

  useEffect(() => {
    if (!total) return;
    if (total <= movies.length) {
      myAlert(NOT_ALERTS.END);
    }
  }, [total, movies]);

  useEffect(() => {
    if (itemToScroll) {
      const yOffset = -80;
      const element = document.getElementById(itemToScroll);
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [itemToScroll]);

  const onLoadMoreClick = () => {
    setPage((prev) => prev + 1);
    console.log(movies);
  };

  const loadMore = movies.length > 0 && total > movies.length;

  return (
    <>
      <h1>Trending today</h1>
      {movies && <MovieList movies={movies} location={location} />}

      {loader ? (
        <Loader />
      ) : (
        loadMore && <LoadMoreButton onClick={onLoadMoreClick} />
      )}
    </>
  );
}
