import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFetch } from "../util-hooks/useFetch";

import { MeetupItem } from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";

import { setMeetups } from "../store/slices/meetup/meetupSlice";
import { addFavorite } from "../store/slices/favorites/favoritesSlice";

export const AllMeetupsPage = () => {
  const [posts, setPosts] = useState([]);
  const { meetups } = useSelector((state) => state.meetups);
  const dispatch = useDispatch();

  const { data, loading, error } = useFetch({
    url: "/data.json",
  });

  const toggleFavorite = (id) => {
    const favorite = meetups.find((meetup) => meetup.id === id);

    dispatch(addFavorite(favorite));
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
                toggleFavorite={(id) => toggleFavorite(id)}
              />
            ))}
        </ul>
      )}
    </section>
  );
};
