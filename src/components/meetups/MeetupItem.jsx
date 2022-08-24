import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

export const MeetupItem = ({
  item,
  handleAddFavorite,
  handleRemoveFavorite,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { favorites } = useSelector((state) => state.favorites);

  const { id, image, title, address, description } = item;

  useEffect(() => {
    setIsFavorite(!!favorites.includes(item));
  }, [favorites, item]);

  const handleAddToFavorite = (id) => {
    handleAddFavorite(id);
  };

  const handleRemoveFromFavorite = (id) => {
    handleRemoveFavorite(id);
  };

  return (
    <li className={classes.item} data-test="meet-up-item">
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          {!isFavorite ? (
            <button onClick={() => handleAddToFavorite(id)}>
              Add to favorites
            </button>
          ) : (
            <button onClick={() => handleRemoveFromFavorite(id)}>
              Remove from favorites
            </button>
          )}
        </div>
      </Card>
    </li>
  );
};
