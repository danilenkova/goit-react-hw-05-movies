import { Link, useLocation } from "react-router-dom";

export default function NotFoundView() {
  const location = useLocation;
  const goToMain = location?.state?.from ?? "/";
  return (
    <>
      <Link to={goToMain}>Go Back</Link>
      <h1>404 Not Found</h1>
    </>
  );
}
