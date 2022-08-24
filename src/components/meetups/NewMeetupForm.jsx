import { useDispatch } from "react-redux";
import { addMeetup } from "../../store/slices/meetup/meetupSlice";
import { useForm } from "../../util-hooks/useForm";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

export const NewMeetupForm = () => {
  const { formState, onInputChange, onResetForm } = useForm({
    id: undefined,
    title: "",
    image: "",
    address: "",
    description: "",
  });

  const { title, image, address, description } = formState;

  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      title.trim().length > 1 &&
      image.trim().length > 1 &&
      address.trim().length > 1 &&
      description.trim().length > 1
    ) {
      const meetupToSend = {
        ...formState,
        id: Date.now(),
      };

      dispatch(addMeetup(meetupToSend));
      onResetForm();
    }
  };

  return (
    <Card>
      <form data-testid="form" className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input
            value={title}
            onChange={onInputChange}
            type="text"
            required
            id="title"
            name="title"
            data-testid="title"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input
            value={image}
            onChange={onInputChange}
            type="url"
            required
            id="image"
            name="image"
            data-testid="image"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            value={address}
            onChange={onInputChange}
            type="text"
            required
            id="address"
            name="address"
            data-testid="address"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            value={description}
            onChange={onInputChange}
            id="description"
            name="description"
            required
            rows="5"
            data-testid="description"
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button type="submit">Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};
