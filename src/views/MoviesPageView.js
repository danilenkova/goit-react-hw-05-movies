import { useState, useEffect, useReducer } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { searchMovies, getCorrectPoster } from "../service/apiService";
import SearchBar from "../components/SearchBar/SearchBar";
import MovieList from "../components/MovieList";
import Loader from "../components/Loader/Loader";
import { NOT_ALERTS, myAlert } from "../service/alerts";

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

export default function MoviesPage() {
  const [searchParams] = useSearchParams();
  const searchWorlds = searchParams.get("query");
  const [query, setQuery] = useState(() => searchWorlds ?? "");
  const [movies, dispatch] = useReducer(moviesReducer, []);
  const [page, setPage] = useState(startPage);
  const [total, setTotal] = useState(null);
  const [itemToScroll, setItemToScroll] = useState(null);
  const [loader, setLoader] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchWorlds) return;
    const getMovies = async () => {
      setLoader(true);
      try {
        const data = await searchMovies(searchWorlds, page);
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
          console.log(movieList[0].id);
        }
      } catch (error) {
        myAlert(NOT_ALERTS.NOT_FOUND);
      } finally {
        setLoader(false);
      }
    };
    getMovies();
  }, [searchWorlds, page]);

  useEffect(() => {
    if (!total) return;
    if (total <= movies.length) {
      myAlert(NOT_ALERTS.END);
    }
  }, [total, movies]);

  useEffect(() => {
    if (itemToScroll) {
      const yOffset = -40;
      const element = document.getElementById(itemToScroll);
      console.log(element);
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      console.log(window.pageYOffset);
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [itemToScroll]);

  const handleFormSubmit = (query) => {
    setQuery(query);
    setPage(startPage);
    navigate({ ...location, search: `query=${query}` });
  };

  const onLoadMoreClick = () => {
    setPage((prev) => prev + 1);
  };

  const loadMore = movies.length > 0 && total > movies.length;

  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} searchQuery={query} />
      {movies && <MovieList movies={movies} location={location} />}
      {loader ? (
        <Loader />
      ) : (
        loadMore && (
          <button
            type="button"
            className="load-more-btn"
            onClick={onLoadMoreClick}
          >
            Load more
          </button>
        )
      )}
    </>
  );
}
