import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useFetch } from "../util-hooks/useFetch";
import { MeetupItem } from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";
import { setMeetups } from "../store/slices/meetup/meetupSlice";

export const AllMeetupsPage = () => {
  const dispatch = useDispatch();

  const { data, loading, error } = useFetch({
    url: "/data.json",
  });

  useEffect(() => {
    data && dispatch(setMeetups(data));
  }, [dispatch, data]);

  if (loading && !data && !error) return <p>Loading...</p>;

  return (
    <section>
      <h1>All Meetups</h1>
      {!loading && !error && data && (
        <ul className={classes.list}>
          {data && data.map((item) => <MeetupItem key={item.id} item={item} />)}
        </ul>
      )}
    </section>
  );
};
