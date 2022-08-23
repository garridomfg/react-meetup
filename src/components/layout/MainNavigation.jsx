import { Link, NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export const MainNavigation = ({ setPage }) => {
  return (
    <header className={classes.header} data-test="navigation-header">
      <Link to="/" className={classes.logo}>
        React Meetups
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink to="/">All Meetups</NavLink>
          </li>

          <li>
            <NavLink to="/new-meetup"> Add New Meetup</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">My Favorites</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
