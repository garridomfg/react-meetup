import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

export const MeetupItem = ({ item, toggleFavorite }) => {
  const { id, image, title, address, description, favorite } = item;
  

  const handleToggleFavorite = (id) => {
    toggleFavorite(id);
  }

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
          {!favorite ? (
            <button onClick={() => handleToggleFavorite(id)}>Add to favorites</button>
          ) : (
            <button onClick={() => handleToggleFavorite(id)}>Remove from favorites</button>
          )}
        </div>
      </Card>
    </li>
  );
};
