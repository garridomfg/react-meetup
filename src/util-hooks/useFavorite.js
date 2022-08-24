import { useSelector, useDispatch } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "../store/slices/favorites/favoritesSlice";

export const useFavorite = () => {
  const dispatch = useDispatch();
  const { meetups } = useSelector((state) => state.meetups);
  const { favorites } = useSelector((state) => state.favorites);

  const handleAddToFavorite = (id) => {
    const favorite = meetups.find((meetup) => meetup.id === id);

    if (favorites.includes(favorite)) return;
    dispatch(addFavorite(favorite));
  };

  const handleRemoveFromFavorite = (id) => {
    dispatch(removeFavorite(id));
  };

  return {
    handleAddToFavorite,
    handleRemoveFromFavorite,
  };
};
