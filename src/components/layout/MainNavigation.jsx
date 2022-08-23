import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export const MainNavigation = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const scrollControll = () => {
      const scrollPosition = window.pageYOffset;
      setVisible(prevScrollPos > scrollPosition);
      setPrevScrollPos(scrollPosition);
    };
    window.addEventListener("scroll", scrollControll);

    return () => window.removeEventListener("scroll", scrollControll);
  }, [prevScrollPos, visible]);

  return (
    <header
      className={`${visible && classes.header}`}
      data-test="navigation-header"
    >
      <Link to="/" className={classes.logo}>
        React Meetups
      </Link>
      <nav>
        <NavLink to="/">All Meetups</NavLink>
        <NavLink to="/new-meetup"> Add New Meetup</NavLink>
        <NavLink to="/favorites">
          My Favorites<span className={classes.badge}>{0}</span>
        </NavLink>
      </nav>
    </header>
  );
};
