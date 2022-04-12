import { NavLink, useLocation } from "react-router-dom";
import { ImArrowLeft2 } from "react-icons/im";
import s from "../styles/styles.module.css";

export default function NotFoundView() {
  const location = useLocation;
  const goToMain = location?.state?.from ?? "/";
  return (
    <>
      <NavLink to={goToMain} className={s.goBackLink}>
        <ImArrowLeft2 />
        Go Back
      </NavLink>
      <div className={s.notFound}>
        <p>
          404
          <br />
          Page Not Found
        </p>
      </div>
    </>
  );
}
