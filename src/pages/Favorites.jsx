import { useSelector } from "react-redux";
import { MeetupItem } from "../components/meetups/MeetupItem";
import { useFavorite } from "../util-hooks/useFavorite";
import classes from "./../components/meetups/MeetupList.module.css";

export const Favorites = () => {
  const { handleRemoveFromFavorite } = useFavorite();
  const { favorites } = useSelector((state) => state.favorites);

  return (
    <section>
      <h1>Favorites Page</h1>
      {favorites.length < 1 && <p>There is no favorites Meetups</p>}
      <ul className={classes.list}>
        {favorites &&
          favorites.map((item) => (
            <MeetupItem
              key={item.id}
              item={item}
              handleRemoveFavorite={(id) => handleRemoveFromFavorite(id)}
            />
          ))}
      </ul>
    </section>
  );
};
