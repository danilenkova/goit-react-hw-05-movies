import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../../service/apiService";
import { NOT_ALERTS, myAlert } from "../../service/alerts";
import ReviewsList from "./ReviewsList";
import Loader from "../Loader/Loader";

export default function Reviews() {
  const [review, setReview] = useState(null);
  const [loader, setLoader] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviewInfo = async () => {
      setLoader(true);
      try {
        const movieInfo = await getReviews(movieId);
        movieInfo.length !== 0 && setReview(movieInfo);
      } catch (error) {
        myAlert(NOT_ALERTS.FETCH_ERROR);
      } finally {
        setLoader(false);
      }
    };
    getReviewInfo();
  }, [movieId]);

  return (
    <>
      {loader && <Loader />}
      {review ? (
        <ReviewsList review={review} />
      ) : (
        <p>There are no reviews for this movie yet.</p>
      )}
    </>
  );
}
