import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFetch } from "../util-hooks/useFetch";

import { MeetupItem } from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";

import { setMeetups } from "../store/slices/meetup/meetupSlice";
import { useFavorite } from "../util-hooks/useFavorite";

export const AllMeetupsPage = () => {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  const { meetups } = useSelector((state) => state.meetups);
  const { handleAddToFavorite, handleRemoveFromFavorite } =
    useFavorite();

  const { data, loading, error } = useFetch({
    url: "/data.json",
  });

  useEffect(() => {
    // Se maneja de esta manera, ya que, al no ser un fetch a una API, y no haber peticiones HTTP, la data mockeada es siempre el listado original de 3 objs
    // de existir algun metodo post, que actualice el listado, este paso no seria necesario
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
