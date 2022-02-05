import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { ImCircleUp } from "react-icons/im";
import { MainConteiner } from "./Main.styled";
import Loader from "../Loader";

const HomePageView = lazy(() =>
  import("../../views/HomePageView" /*webpackChunkName: "home-page" */)
);
const MoviesPageView = lazy(() =>
  import("../../views/MoviesPageView" /*webpackChunkName: "movies-page" */)
);
const MovieDetailsPageView = lazy(() =>
  import(
    "../../views/MovieDetailsPageView" /*webpackChunkName: "movie-details-page" */
  )
);
const NotFoundView = lazy(() =>
  import("../../views/NotFoundView" /*webpackChunkName: "not-found" */)
);
const Cast = lazy(() =>
  import("../../components/Cast" /*webpackChunkName: "cast" */)
);
const Reviews = lazy(() =>
  import("../../components/Reviews" /*webpackChunkName: "reviews" */)
);

const Main = () => (
  <MainConteiner>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePageView />} />
        <Route path="movies" element={<MoviesPageView />} />
        <Route path="movies/:movieId" element={<MovieDetailsPageView />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </Suspense>
    <ScrollToTop
      smooth
      top={300}
      component={<ImCircleUp size="3em" color="#cccccc" />}
      style={{
        backgroundColor: "transparent",
        boxShadow: "none",
        zIndex: 0,
      }}
    />
  </MainConteiner>
);

export default Main;
