import { NavLink } from "react-router-dom";
import s from "../../styles/styles.module.css";

const Navigation = () => (
  <nav className={s.navigation}>
    <NavLink
      end
      to="/"
      className={({ isActive }) => (isActive ? `${s.activeLink}` : `${s.link}`)}
    >
      Home
    </NavLink>

    <NavLink
      to="/movies"
      className={({ isActive }) => (isActive ? `${s.activeLink}` : `${s.link}`)}
    >
      Movies
    </NavLink>
  </nav>
);

export default Navigation;
