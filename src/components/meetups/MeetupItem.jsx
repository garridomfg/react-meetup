import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

export const MeetupItem = ({ item }) => {
  const { image, title, address, description } = item;

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
          <button>Add to favorites</button>
        </div>
      </Card>
    </li>
  );
};
