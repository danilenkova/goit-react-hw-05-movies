import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCast, getCorrectCastPhoto } from "../../service/apiService";
import { NOT_ALERTS, myAlert } from "../../service/alerts";
import CastList from "./CastList";
import Loader from "../Loader/Loader";

export default function Cast() {
  const [cast, setCast] = useState();
  const [loader, setLoader] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      setLoader(true);
      try {
        const movieInfo = await getCast(movieId);
        const correctInfo = getCorrectCastPhoto(movieInfo);
        correctInfo.length !== 0 && setCast(correctInfo);
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
      {loader && <Loader />}
      {cast ? <CastList cast={cast} /> : <p>No information</p>}
    </>
  );
}
