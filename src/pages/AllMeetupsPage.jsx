import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFetch } from "../util-hooks/useFetch";

import { MeetupItem } from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";

import { setMeetups } from "../store/slices/meetup/meetupSlice";
import {
  addFavorite,
  removeFavorite,
} from "../store/slices/favorites/favoritesSlice";

export const AllMeetupsPage = () => {
  const [posts, setPosts] = useState([]);
  const { meetups } = useSelector((state) => state.meetups);
  const { favorites } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const { data, loading, error } = useFetch({
    url: "/data.json",
  });

  const handleAddToFavorite = (id) => {
    const favorite = meetups.find((meetup) => meetup.id === id);

    if (favorites.includes(favorite)) return;
    dispatch(addFavorite(favorite));
  };

  const handleRemoveFromFavorite = (id) => {
    dispatch(removeFavorite(id));
  };

  useEffect(() => {
    if (meetups.length) {
      setPosts(meetups);
    } else {
      setPosts(data);
      data && dispatch(setMeetups(data));
    }
  }, [dispatch, data, meetups]);

  if (loading && !posts && !error) return <p>Loading...</p>;

  return (
    <section>
      <h1>All Meetups</h1>
      {!loading && !error && posts && (
        <ul className={classes.list}>
          {posts &&
            posts.map((item) => (
              <MeetupItem
                key={item.id}
                item={item}
                handleAddFavorite={(id) => handleAddToFavorite(id)}
                handleRemoveFavorite={(id) => handleRemoveFromFavorite(id)}
              />
            ))}
        </ul>
      )}
    </section>
  );
};
